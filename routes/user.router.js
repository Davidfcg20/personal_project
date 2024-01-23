const express = require ('express');
const UserService = require('./../services/user.service');
const { createUserSchema, getUserSchema, updateUserSchema } = require('./../schemas/user.schema');
const { validatorMiddleware } = require('./../middlewares/validator.handler');

const router = express.Router();
const service = new UserService;

router.get('/', async(req, res, next) => {
  try {
    res.send(await service.findAll());
  } catch (error) {
    next(error);
  }
});

router.get('/:userId',
  validatorMiddleware(getUserSchema, 'params'),
  async(req, res, next) =>{
    try {
      const { userId } = req.params;
      res.send(await service.findOne(userId));
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorMiddleware(createUserSchema, 'body'),
  async(req, res, next) => {
    try {
      const data = req.body;
      res.send(await service.create(data));
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:userId',
  validatorMiddleware(getUserSchema, 'params'),
  validatorMiddleware(updateUserSchema, 'body'),
  async(req, res, next) =>{
    try {
      const { userId } = req.params;
      const changes = req.body;
      res.send(await service.update(userId, changes));
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:userId',
  validatorMiddleware(getUserSchema, 'params'),
  async(req, res, next) =>{
    try {
      const { userId } = req.params;
      res.send(await service.delete(userId));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
