const express = require('express');
const companiesRouter = require('./companies.router');
const consumptionsRouter = require('./consumptions.router');
const reviewsRouter = require('./reviews.router');
const locationRouter = require('./locations.router');

const router = express.Router();

function routerApi(app){
  app.use('/api/v1', router);
  router.use('/companies', companiesRouter);
  router.use('/consumptions', consumptionsRouter);
  router.use('/reviews', reviewsRouter);
  router.use('/locations', locationRouter);
}

module.exports = routerApi;
