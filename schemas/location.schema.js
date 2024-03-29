const Joi = require('joi');

const { companyId } = require('./company.schema');

const locationId = Joi.number().integer();
const locationAddress = Joi.string();
const locationCountry = Joi.string();
const locationCity = Joi.string();
const locationNeighborhood = Joi.string();

const createLocationSchema = Joi.object({
  locationId: locationId.required(),
  locationAddress: locationAddress.required(),
  locationCountry: locationCountry.required(),
  locationCity: locationCity.required(),
  locationNeighborhood: locationNeighborhood.required(),
  companyId: companyId.required().allow(null)
});

const getLocationSchema = Joi.object({
  locationId: locationId.required()
});

const updateLocationSchema = Joi.object({
  locationAddress: locationAddress.required(),
  locationCountry: locationCountry.required(),
  locationCity: locationCity.required(),
  locationNeighborhood: locationNeighborhood.required(),
  companyId: companyId.optional()
});

module.exports = { locationId, createLocationSchema, getLocationSchema, updateLocationSchema };
