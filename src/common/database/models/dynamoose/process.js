import * as dynamoose from "dynamoose";

const { PROCESS_TABLE } = process.env;

const Process = dynamoose.model("Process", {
  uuid: String,
  user: {
    type: String,
    index: {
      global: true,
      name: "user-createdAt-index",
      project: true,
      rangeKey: "createdAt",
    },
  },
  cognito: {
    type: String,
    index: {
      global: true,
      name: "cognito-createdAt-index",
      project: true,
      rangeKey: "createdAt",
    },
  },
  key: Number,
  vw: {
    type: String,
    index: {
      global: true,
      name: "vw-createdAt-index",
      project: true,
      rangeKey: "createdAt",
    },
  },
  emote: {
    type: String,
    index: {
      global: true,
      name: "emote-createdAt-index",
      project: true,
      rangeKey: "createdAt",
    },
  },
  animation: String,
  video: String,
  step: {
    type: String,
    index: {
      global: true,
      name: "step-createdAt-index",
      project: true,
      rangeKey: "createdAt",
    },
  },
  progression: Number,
  createdAt: Date,
  endedAt: Date,
  lastUpdateAt: Date,
  mlEndedAt: Date,
  mlStartedAt: Date,
  mlReturnCode: Number,
  fastML: Boolean,
  postMLError: Boolean,
  maturity: Boolean,
  validated: Boolean,
  rejected: Boolean,
  parent: {
    type: String,
    index: {
      global: true,
      name: "parent-createdAt-index",
      project: true,
      rangeKey: "createdAt",
    },
  },
  name: String,
  text: String,
});

new dynamoose.Table(PROCESS_TABLE, [Process]);

export default Process;
