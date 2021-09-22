const express = require('express');

const helloworldController = require('../controller/helloworld.controller');

const router = express.Router();

router.get('/', helloworldController.getStart);

module.exports = router;
