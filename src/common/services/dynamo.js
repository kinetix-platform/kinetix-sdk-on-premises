import Process from '#common/database/models/dynamoose/process.js';
import moment from 'moment';
import momentDurationFormat from 'moment-duration-format';
import dynamoose from "dynamoose";

momentDurationFormat(moment);

class DatabaseService {
  async createProcess(data) {
    return Process.create({
      ...data,
      createdAt: new Date(),
    });
  }
  
  async getAll({ start, end, vw, pageSize = 50 }) {
    let allProcesses = [];
    let exclusiveStartKey = undefined;
    
    do {
      const query = Process.scan();
      
      if (start && end) {
        query.where('createdAt').between(moment(start).valueOf(), moment(end).valueOf());
      }
      
      if (vw) {
        query.where('vw').in(vw);
      }
      
      if (exclusiveStartKey) {
        query.startAt(exclusiveStartKey);
      }
      query.limit(pageSize);
      
      const results = await query.exec();
      
      allProcesses = allProcesses.concat(results);
      exclusiveStartKey = results.lastKey;
    } while (exclusiveStartKey);
    return allProcesses;
  }

  async getProcessesByCognito(cognito, sort = 'descending') {
    const query = Process.query('cognito').eq(cognito).sort(sort);
    return query.exec();
  }
  
  async getProcessesByUserV2(user, options = {}) {
    let {
      includeSteps = [],
      excludeSteps = [],
      limit,
      limitDate,
    } = options
    const query = Process.query('user').eq(user.id).sort('descending')
    const condition = new dynamoose.Condition();
    let conditionElements = 0;
    
    if (excludeSteps.length) {
      excludeSteps.forEach(s => {
          query.where('step').not().contains(s);
      });
    }
    
    let includeCondition;
    if (includeSteps.length) {
      includeCondition = new dynamoose.Condition();
      includeSteps.forEach(s => {
        includeCondition.where('step').contains(s).or();
      })
      condition.and().parenthesis(includeCondition);
      conditionElements += 1;
    }
    
    if (conditionElements) {
      if (conditionElements === 1 && includeCondition)
        query.and().parenthesis(includeCondition);
      else
        query.and().parenthesis(condition);
    }
    if (limitDate) {
      query.filter('createdAt').ge(new Date(limitDate).getTime())
    }
    if (limit) {
      query.limit(limit)
    }
    
    return query.exec();
  }
  
  async getProcessesByUser(user, onGoingOnly = true, options = {
    includeSteps: [],
    excludeSteps: []
  }) {
    const {
      excludeSteps,
      validated,
      rejected,
      limit,
      limitDate,
      excludeParent,
      excludeUnknownMLError,
      excludePostMLError,
    } = options
    const query = Process.query('user').eq(user.id).sort('descending')
    if (onGoingOnly) {
      query
        .where('step').not().contains('validated')
        .where('step').not().contains('rejected')
        .where('step').not().contains('done')
        .where('step').not().contains('failed')
    }
    if (excludeSteps) {
      excludeSteps.forEach(s => {
        query.where('step').not().contains(s);
      })
    }
    if (typeof validated === 'boolean') {
      query.where('validated').eq(validated)
    }
    if (typeof rejected === 'boolean') {
      query.where('rejected').eq(rejected)
    }
    if (limitDate) {
      query.filter('createdAt').ge(new Date(limitDate).getTime())
    }
    if (limit) {
      query.limit(limit)
    }
    if (excludeParent) {
      query.where('parent').not().exists();
    } else {
      query.where('parent').exists();
    }
    if (excludeUnknownMLError) {
      query.where('mlReturnCode').not().eq(-1)
    }
    if (excludePostMLError) {
      query.where('postMLError').eq(false);
    }
    
    return query.exec();
  }
  
  async getProcess(uuid) {
    return Process.get(uuid);
  }
  
  async getProcessChild(uuid) {
    return Process.query('parent').eq(uuid).exec();
  }
  
  async getProcessByEmote(uuid) {
    const processes = await Process.query('emote').eq(uuid).exec();
    return processes[0];
  }

  async updateProcess(uuid, data) {
    return Process.update({uuid}, data)
  }

  async deleteProcess(uuid) {
    return Process.delete(uuid);
  }
  
  // Temporary, just to migrate fields
  async updateOldItems() {
    try {
      const oldItems = await Process.scan().exec();
      
      let updated = 0;
      const emptyFields = oldItems.filter(item => item.validated === undefined || item.rejected === undefined);
      console.log(emptyFields.length + '/' + oldItems.length)
      for (const item of emptyFields) {
        updated += 1;
        item.validated = false;
        item.rejected = false;
        await item.save();
        await new Promise(r => setTimeout(r, 500));
      }
      
      console.log('Update done. => ', updated, ' elements');
    } catch (error) {
      console.error('Error :', error);
    }
  }
  
  async migrateValidationStep() {
    try {
      const oldItems = await Process.scan().exec();
      
      const validated = oldItems.filter(item => item.validated === true);
      const rejected = oldItems.filter(item => item.rejected === true);
      
      for (const item of validated) {
        item.step = 'validated';
        await item.save();
        await new Promise(r => setTimeout(r, 500));
      }
      
      for (const item of rejected) {
        item.step = 'rejected';
        await item.save();
        await new Promise(r => setTimeout(r, 500));
      }

    } catch (error) {
      console.error('Error :', error);
    }
  }

  async getProcessByEmoteOrUuid(uuid) {
    try {
      // Query for uuid
      const uuidResults = await Process.query('uuid').eq(uuid).exec();

      // Query for emote
      const emoteResults = await Process.query('emote').eq(uuid).exec();

      // Combine results
      const combinedResults = [...uuidResults, ...emoteResults];

      console.log(combinedResults)
      return combinedResults;
    } catch (error) {
        console.error("Error querying Process table:", error);
        throw error;
    }
  }
}

export default new DatabaseService();


