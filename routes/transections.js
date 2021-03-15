const express = require("express");

var router = express.Router();
const { getTransections, addTransections, deleteTransections }  = require('../controller/transections');

router.route('/').get(getTransections).post(addTransections);

router.route('/:id').delete(deleteTransections);

module.exports = router;