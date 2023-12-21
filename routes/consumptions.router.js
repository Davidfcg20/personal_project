const express = require('express');
const router = express.Router();
const ConsumptionService = require('./../services/consumption.service');

const service = new ConsumptionService;

router.get('/', async (req, res) => {
  res.send('consumptions');

});


module.exports = router;
