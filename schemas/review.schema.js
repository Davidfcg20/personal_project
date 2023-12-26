const Joi = require('joi');

const { locationId } = require('./location.schema');
const { ratingId } = require('./rating.schema');
const { statusId } = require('./status.schema');
const { commentaryId } = require('./commentary.schema');

const reviewId = Joi.number().integer();
const reviewGeneralOpinion = Joi.string();

const createReviewSchema = Joi.object({
  reviewId: reviewId.required(),
  reviewGeneralOpinion: reviewGeneralOpinion.required(),
  locationId: locationId.required(),
  ratingId: ratingId.required(),
  statusId: statusId.required(),
  commentaryId: commentaryId.required()
});

const getReviewSchema = Joi.object({
  reviewId: reviewId.required()
});

const updateReviewSchema = Joi.object({
  reviewGeneralOpinion: reviewGeneralOpinion.required(),
  locationId: locationId.required(),
  ratingId: ratingId.required(),
  statusId: statusId.required(),
  commentaryId: commentaryId.required()
});

module.exports = { reviewId, createReviewSchema, getReviewSchema, updateReviewSchema };
