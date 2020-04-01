var express = require('express');
var router = express.Router();



// get all todos
router.get('/', (req, res) => {
  res.status(200).send(
    [
      {
        date: '31/03/2020',
        invoiceNumber: '35636',
        description: 'my desc',
        amount: '123',
        currency: 'ARS',
        bankAccount: 'Naty BBVA',
      }
    ]
  )
});

// get all todos
router.post('/', (req, res) => {
  res.status(200).send({
    status: 'Cashin saved :)',
    data: {
      date: '31/03/2020',
      invoiceNumber: '35636',
      description: 'my desc',
      amount: '123',
      currency: 'ARS',
      bankAccount: 'Naty BBVA',
    }
  })
});

module.exports = router;