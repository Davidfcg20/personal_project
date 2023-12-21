const express = require('express');
const VisitService = require('./../services/visit.service');
const { createVisitSchema, getVisitSchema } = require('./../schemas/visit.schema');
const { validatorMiddleware } = require('./../middlewares/validator.handler');

const router = express.Router();
const service = new VisitService;

router.get('/', async(req, res, next) => {
  try {
    res.send(await service.findAll());
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorMiddleware(createVisitSchema, 'body'),
  async(req, res, next) => {
    try {
      const data = req.body;
      res.send(await service.create(data));
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:visitId',
  validatorMiddleware(getVisitSchema, 'params'),
  async(req, res, next) =>{
    try {
      const { visitId } = req.params;
      res.send(await service.findOne(visitId));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
