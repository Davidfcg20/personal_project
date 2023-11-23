const Joi = require('joi');

const consumptionId = Joi.number().integer();
const consumptionPrice = Joi.number();
const consumptionIdLocation = Joi.number().integer();
const consumptionIdProduct = Joi.number().integer();
const consumptionIdDate = Joi.number().integer();

const createConsumptionSchema = Joi.object({
  consumptionId: consumptionId.required(),
  consumptionPrice: consumptionPrice.required(),
  consumptionIdLocation: consumptionIdLocation.required(),
  consumptionIdProduct: consumptionIdProduct.required(),
  consumptionIdDate: consumptionIdDate.required()
});

module.exports = { createConsumptionSchema };
