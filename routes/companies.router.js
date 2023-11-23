const express = require ('express');
const CompanyService = require('./../services/company.service');
const { createCompanySchema } = require('./../schemas/company.schema');
const { validatorMiddleware } = require('./../middlewares/validator.handler');

const router = express.Router();
const service = new CompanyService;

router.get('/', async(req, res, next) => {
  try {
    res.send(await service.findAll());
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorMiddleware(createCompanySchema, 'body'),
  async(req, res, next) => {
    try {
      const data = req.body;
      res.send(await service.create(data));
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
