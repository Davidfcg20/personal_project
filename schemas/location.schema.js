const Joi = require('joi');

const { companyId } = require('./company.schema');

const locationId = Joi.number().integer();
const locationCountry = Joi.string();
const locationCity = Joi.string();
const locationNeighborhood = Joi.string();

const createLocationSchema = Joi.object({
  locationCountry: locationCountry.required(),
  locationCity: locationCity.required(),
  locationNeighborhood: locationNeighborhood.required(),
  companyId: companyId.required()
});

const getLocationSchema = Joi.object({
  locationId: locationId.required()
});

module.exports = { locationId, createLocationSchema, getLocationSchema };
