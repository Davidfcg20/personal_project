const Joi = require('joi');

const statusId = Joi.number().integer();
const statusValue = Joi.string();

const createStatusSchema = Joi.object({
  statusId: statusId.required(),
  statusValue: statusValue.required()
});

const getStatusSchema = Joi.object({
  statusId: statusId.required()
});

const updateStatusSchema = Joi.object({
  statusValue: statusValue.required()
});

module.exports = { statusId, createStatusSchema, getStatusSchema, updateStatusSchema };
