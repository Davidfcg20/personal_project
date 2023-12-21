const Joi = require('joi');

const {createProfileSchema, updateProfileSchema }  = require('./profile.schema');

const companyId = Joi.number().integer();
const companyName = Joi.string();

const createCompanySchema = Joi.object({
  companyName: companyName.required(),
  profile: createProfileSchema.allow(null)
});

const getCompanySchema = Joi.object({
  companyId: companyId.required()
});

const updateCompanySchema = Joi.object({
  companyName: companyName.required(),
  profile: updateProfileSchema.allow(null)
});

module.exports = { companyId, createCompanySchema, getCompanySchema, updateCompanySchema };

