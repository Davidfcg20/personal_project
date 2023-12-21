const Joi = require('joi');

const { locationId } = require('./location.schema');
//const {  } = require('./rating.schema');
//const {  } = require('./status.schema');
//const {  } = require('./commentary.schema');

const visitId = Joi.number().integer();
const visitGeneralOpinion = Joi.string();
const ratingId = Joi.number().integer().positive();
const statusId = Joi.number().integer();
const commentaryId = Joi.number().integer();

const createVisitSchema = Joi.object({
  //visitId: visitId.required(),
  visitGeneralOpinion: visitGeneralOpinion.required(),
  locationId: locationId.required(),
  commentaryId: commentaryId.required(),
  ratingId: ratingId.required(),
  statusId: statusId.required()
});

const getVisitSchema = Joi.object({
  visitId: visitId.required()
});

module.exports = { visitId, createVisitSchema, getVisitSchema };
