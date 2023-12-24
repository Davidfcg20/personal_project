const express = require('express');
const ReviewService = require('../services/review.service');
const { createReviewSchema, getReviewSchema } = require('../schemas/review.schema');
const { validatorMiddleware } = require('../middlewares/validator.handler');

const router = express.Router();
const service = new ReviewService;

router.get('/', async(req, res, next) => {
  try {
    res.send(await service.findAll());
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorMiddleware(createReviewSchema, 'body'),
  async(req, res, next) => {
    try {
      const data = req.body;
      res.send(await service.create(data));
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:reviewId',
  validatorMiddleware(getReviewSchema, 'params'),
  async(req, res, next) =>{
    try {
      const { reviewId } = req.params;
      res.send(await service.findOne(reviewId));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
