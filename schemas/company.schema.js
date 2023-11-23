const Joi = require('joi');

const companyName = Joi.string();
const companyProfileId = Joi.string();

const createCompanySchema = Joi.object({
  companyName: companyName.required(),
  companyProfileId: companyProfileId.required()
});

module.exports = { createCompanySchema };

