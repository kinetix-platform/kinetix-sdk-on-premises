import Sequelize from "sequelize";
import httpStatus from "http-status";

const { UniqueConstraintError } = Sequelize;
const { CONFLICT } = httpStatus;

class CrudService {
  constructor(name, model) {
    this.model = model;
    this.name = name;
  }

  /**
   * create an entity in database
   * @param data users input data
   * @returns {Promise<User>}
   */
  async create(data) {
    try {
      return await this.model.create(data);
    } catch (e) {
      if (e instanceof UniqueConstraintError) {
        e.message = `${this.name} already exists`;
        e.code = CONFLICT;
      }
      throw e;
    }
  }

  async getAll(where, fields = ["*"], options = {}) {
    return this.model.findAll({
      where,
      attributes: {
        include: fields,
      },
      ...options,
    });
  }

  async remove(id) {
    return this.model.destroy({ where: { id } });
  }

  async getBy(where, fields = ["*"], include = []) {
    return this.model.findOne({
      where,
      attributes: {
        include: fields,
      },
      include,
    });
  }

  async countBy(where, fields = ["*"]) {
    return this.model.count({
      where,
      attributes: {
        include: fields,
      },
    });
  }

  async update(data) {
    const { id } = data;
    if (!id) {
      throw new Error("No id to update");
    }
    return this.model.update(data, { where: { id } });
  }

  async get(id) {
    return this.model.findOne({ where: { id: parseInt(id) } });
  }
}

export default CrudService;
