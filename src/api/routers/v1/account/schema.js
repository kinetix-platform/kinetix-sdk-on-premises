import { Joi } from '../../../middlewares/validator.js';
const file = ({ allowedTypes = [] }) => Joi.object()
  .keys({
    fieldname: Joi.string().required(),
    originalname: Joi.string().required(),
    encoding: Joi.string().required(),
    mimetype: Joi.string()
      .allow(...allowedTypes)
      .required(),
    destination: Joi.string().required(),
    filename: Joi.string().required(),
    path: Joi.string().required(),
    size: Joi.number().min(0).required(),
  })
  .required();
  
const interval = Joi.alternatives([Joi.string().valid(null), Joi.number().integer().min(0)]); // WHITELIST AUTHORIZED INTERVALS
const arrayOfUuids = Joi.array().items(Joi.string().uuid());

export const get = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  })
};

export const addEmotesByVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  body: Joi.object().keys({
    uuids: Joi.array().items(Joi.string().uuid().required()).required(),
  }),
};

export const addEmotesToUserByVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
    userId: Joi.string().required(),
    emoteUuid: Joi.string().uuid().required(),
  }),
};

export const deleteEmotesFromUserByVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
    userId: Joi.string().required(),
    emoteUuid: Joi.string().uuid().required(),
  }),
  body: Joi.object().keys({
    reason: Joi.string()
  })
};


export const createUserByVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  body: Joi.object().keys({
    id: Joi.string().required(),
  }),
}

export const updatePlan = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  body : Joi.object().keys({
    plan: Joi.string().uuid().required(),
  }).required(),
};

export const getEmotesByVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  query : Joi.object().keys({
    mature: Joi.boolean(),
    categories: Joi.array().items(Joi.string().uuid()),
  }),
};

export const getUserByVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
    userId: Joi.string().required(),
  }),
};

export const createKey = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  body: Joi.object().keys({
    expire: Joi.date(),
    canRead: Joi.boolean().required(),
    canWrite: Joi.boolean().required(),
  }).required(),
};


export const getKeys = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  })
};

export const getUsage = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  })
};

export const deleteKey = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
    keyUuid: Joi.string().uuid().required(),
  })
};

export const createVW = {
  body: Joi.object().keys({
    name: Joi.string().min(3).max(25),
    website: Joi.string(),
    webhookUri: Joi.string().uri(),
    mainUsage: Joi.string().valid('SDK', 'API').default('SDK'),
  })
};
export const updateVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().min(3).max(25),
    website: Joi.string(),
    webhookUri: Joi.string().uri()
  }),
};

export const removeVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  })
};

export const aliasGetAll = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  query: Joi.object().keys({
    name: Joi.string(),
    orderBy: Joi.string().valid('createdAt','name'),
    orderDirection: Joi.string().valid('ASC', 'DESC'),
  })
};

export const listModeration = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  query: Joi.object().keys({
    limit: Joi.number().integer().min(0),
    offset: Joi.number().integer().min(0),
    threshold: Joi.number().min(0).max(1),
  })
};

export const aliasCreate = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }).required(),
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
    startDate: Joi.date(),
    interval,
    emotes: arrayOfUuids,
    categories: arrayOfUuids,
    mature: Joi.boolean(),
  }).required(),
};

export const aliasGet = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
    aliasUuid: Joi.string().uuid().required(),
  }).required(),
};

export const aliasUpdate = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
    aliasUuid: Joi.string().uuid().required(),
  }).required(),
  body: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    startDate: Joi.date(),
    interval,
    emotes: arrayOfUuids,
    categories: arrayOfUuids,
    mature: Joi.alternatives([Joi.string().valid(null), Joi.boolean()])
  }).required(),
};

export const usersGetAll = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  query: Joi.object().keys({
    name: Joi.string(),
    orderBy: Joi.string().valid('createdAt','userId'),
    orderDirection: Joi.string().valid('ASC', 'DESC'),
  })
};

export const createVideo = {
    body: Joi.object().keys({
      text: Joi.forbidden(),
      name: Joi.string(),
      start: Joi.alternatives([
        Joi.string().allow(''),
        Joi.date().format('HH:mm:ss.SSS'),
      ]),
      end: Joi.alternatives([
        Joi.string().allow(''),
        Joi.date().format('HH:mm:ss.SSS'),
      ]),
      // x: Joi.number().min(0),
      // y: Joi.number().min(0),
      // outputWidth: Joi.number().min(0),
      // outputHeight: Joi.number().min(0),
    }),
    files: Joi.array().items( file({ allowedTypes: ['video/ogg', 'video/mp4', 'video/webm'] })).required(),
  }

  export const createText = {
    body: Joi.object().keys({
      name: Joi.string(),
      text: Joi.string().required(),
    }),
    files: Joi.forbidden(),
  }

export const getAllProcesses = {
    query: Joi.object().keys({
      type: Joi.string().valid('text', 'video')
    }),
  }

  
export const updateProcess = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().min(3).max(25),
  }).required(),
};

export const updateConf = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().min(3).max(25),
    website: Joi.string().allow(null),
    webhookUri: Joi.string().uri().allow(null),
    defaultAvatarUuid: Joi.string().uuid().allow(null),
    enableGTAV: Joi.boolean().allow(null),
    ugcValidation: Joi.boolean().allow(null),
    ugcFrontentUrl: Joi.string().uri().allow(null),
  }),
};