const Joi = require('joi');

const commentaryId = Joi.number().integer();
const commentaryIsVeganFriendly = Joi.boolean();
const commentaryHasVeganSnack = Joi.boolean();

const createCommentarySchema = Joi.object({
  commentaryId: commentaryId.required(),
  commentaryIsVeganFriendly: commentaryIsVeganFriendly.required(),
  commentaryHasVeganSnack: commentaryHasVeganSnack.required()
});

const getCommentarySchema = Joi.object({
  commentaryId: commentaryId.required()
});

const updateCommentarySchema = Joi.object({
  commentaryIsVeganFriendly: commentaryIsVeganFriendly.required(),
  commentaryHasVeganSnack: commentaryHasVeganSnack.required()
});

module.exports = { commentaryId, createCommentarySchema, getCommentarySchema, updateCommentarySchema };
