const Joi = require('joi');

const profileId = Joi.string();
const profileUrl = Joi.string();

const createProfileSchema = Joi.object({
  profileId: profileId.required(),
  profileUrl: profileUrl.required()
});

const updateProfileSchema = Joi.object({
  profileUrl: profileUrl.required()
});

module.exports = { createProfileSchema, updateProfileSchema };
