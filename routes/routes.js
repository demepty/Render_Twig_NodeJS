var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

/* GET users listing. */
router.get('/',controllers.home.index);
router.get('/index2',controllers.home.index2);

module.exports = router;
