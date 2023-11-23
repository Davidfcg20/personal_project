const Joi = require('joi');

const visitId = Joi.number().integer();
const visitIdLocation = Joi.number().integer();
const visitIdRating = Joi.number().integer().positive();
const visitIdStatus = Joi.number().integer();
const visitIdCommentary = Joi.number().integer();

const createVisitSchema = Joi.object({
  visitId: visitId.required(),
  visitIdLocation: visitIdLocation.required(),
  visitIdRating: visitIdRating.required(),
  visitIdStatus: visitIdStatus.required(),
  visitIdCommentary: visitIdCommentary.required()
});

module.exports = { createVisitSchema };
