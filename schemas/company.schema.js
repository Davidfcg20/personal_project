const Joi = require('joi');

const { profileId, createProfileSchema, updateProfileSchema }  = require('./profile.schema');

const companyId = Joi.number().integer();
const companyName = Joi.string();

const createCompanySchema = Joi.object({
  companyId: companyId.optional(),
  companyName: companyName.required(),
  profileId: profileId.optional(),
  profile: createProfileSchema.optional()
});

const getCompanySchema = Joi.object({
  companyId: companyId.required()
});

const updateCompanySchema = Joi.object({
  companyName: companyName.required(),
  profileId: profileId.optional(),
  profile: updateProfileSchema.optional()
});

module.exports = { companyId, createCompanySchema, getCompanySchema, updateCompanySchema };

