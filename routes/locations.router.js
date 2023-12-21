const express = require('express');
const LocationService = require('./../services/location.service');
const { createLocationSchema, getLocationSchema} = require('./../schemas/location.schema');
const { validatorMiddleware } = require('./../middlewares/validator.handler');

const router = express.Router();
const service = new LocationService;

router.get('/', async(req, res, next) => {
  try {
    res.send(await service.findAll());
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorMiddleware(createLocationSchema, 'body'),
  async(req, res, next) => {
    try {
      const data = req.body;
      res.send(await service.create(data));
    } catch (error) {
      next(error);
    }
  }
);


router.get('/:locationId',
  validatorMiddleware(getLocationSchema, 'params'),
  async(req, res, next) =>{
    try {
      const { locationId } = req.params;
      res.send(await service.findOne(locationId));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
