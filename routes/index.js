const express = require('express');
const companiesRouter = require('./companies.router');
const consumptionsRouter = require('./consumptions.router');
const locationRouter = require('./locations.router');
const reviewsRouter = require('./reviews.router');
const usersRouter = require('./user.router');
const authRouter = require('./auth.router');

/*//protecting all router
const { checkApiKey } = require('./../middlewares/auth.handler');*/


const router = express.Router();

function routerApi(app){
  app.use('/api/v1', /*checkApiKey,*/ router,);
  router.use('/companies', companiesRouter);
  router.use('/consumptions', consumptionsRouter);
  router.use('/locations', locationRouter);
  router.use('/reviews', reviewsRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
