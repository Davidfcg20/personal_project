const Joi = require('joi');

const ratingId = Joi.number().integer();
const ratingStar = Joi.number().integer().min(0).max(5);
const ratingValue = Joi.number().min(0).max(10);

const createRatingSchema = Joi.object({
  ratingId: ratingId.required(),
  ratingStar: ratingStar.required(),
  ratingValue: ratingValue.required()
});

const getRatingSchema = Joi.object({
  ratingId: ratingId.required()
});

const updateRatingSchema = Joi.object({
  ratingStar: ratingStar.required(),
  ratingValue: ratingValue.required()
});

module.exports = { ratingId, createRatingSchema, getRatingSchema, updateRatingSchema };
