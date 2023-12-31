const express = require ('express');
const CompanyService = require('./../services/company.service');
const { createCompanySchema, getCompanySchema, updateCompanySchema } = require('./../schemas/company.schema');
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

router.get('/:companyId',
  validatorMiddleware(getCompanySchema, 'params'),
  async(req, res, next) =>{
    try {
      const { companyId } = req.params;
      res.send(await service.findOne(companyId));
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorMiddleware(createCompanySchema, 'body'),
  async(req, res, next) => {
    try {
      const data = req.body;
      res.send(await service.create(data));
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:companyId',
  validatorMiddleware(getCompanySchema, 'params'),
  validatorMiddleware(updateCompanySchema, 'body'),
  async(req, res, next) =>{
    try {
      const { companyId } = req.params;
      const changes = req.body;
      res.send(await service.update(companyId, changes));
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:companyId',
  validatorMiddleware(getCompanySchema, 'params'),
  async(req, res, next) =>{
    try {
      const { companyId } = req.params;
      res.send(await service.delete(companyId));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
