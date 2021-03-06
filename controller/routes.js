// route.js : This contains the routing of the server.
var router = require('express').Router();
 
router.use('/', require('./main'));                         //For Main Pages Router
router.use('/admin', require('./admin'));                   //For Admin Pages Router
router.use('/api', require('./api'));                       //For API requests
router.use(require('../middleware/errorHandler').error404); //If page not found.
router.use(require('../middleware/errorHandler').error500); //This handles all error on requests.

//export this router to use in our server.js
module.exports = router;