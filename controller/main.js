var router = require('express').Router();

//Routes here.
router.get('/', function(req, res, next){res.send('Hello, You\'re in the main')});

module.exports = router;