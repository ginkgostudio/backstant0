var express = require('express');
var router = express.Router();
var cashin = require('../db');

// get all todos
router.get('/', (req, res) => {
  res.status(200).send({
    message: 'Hi John, Here are your todos. You better start doing some work! ;)',
    todos: cashin
  })
});

module.exports = router;