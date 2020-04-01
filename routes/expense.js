var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
  res.status(200).send({
    message: 'Expense saved :)',
    expense: {
      amount: '123',
      description: 'my desc',
      currency: 'ARS',
      paymentMethod: 'Efectivo',
      date: '31/03/2020'
    }
  })
});

module.exports = router;
