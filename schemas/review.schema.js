const Joi = require('joi');

const { locationId } = require('./location.schema');
//const {  } = require('./rating.schema');
//const {  } = require('./status.schema');
//const {  } = require('./commentary.schema');

const reviewId = Joi.number().integer();
const reviewGeneralOpinion = Joi.string();
const ratingId = Joi.number().integer().positive();
const statusId = Joi.number().integer();
const commentaryId = Joi.number().integer();

const createReviewSchema = Joi.object({
  //reviewId: reviewId.required(),
  reviewGeneralOpinion: reviewGeneralOpinion.required(),
  locationId: locationId.required(),
  commentaryId: commentaryId.required(),
  ratingId: ratingId.required(),
  statusId: statusId.required()
});

const getReviewSchema = Joi.object({
  reviewId: reviewId.required()
});

module.exports = { reviewId, createReviewSchema, getReviewSchema };
