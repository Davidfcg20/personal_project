const Joi = require('joi');

const companyId = Joi.number().integer();
const companyName = Joi.string();
const profileId = Joi.string();

const createCompanySchema = Joi.object({
  companyName: companyName.required(),
  profileId: profileId.required()
});

const getCompanySchema = Joi.object({
  companyId: companyId.required()
});

const updateCompanySchema = Joi.object({
  companyName: companyName.required(),
});

module.exports = { createCompanySchema, getCompanySchema, updateCompanySchema };

