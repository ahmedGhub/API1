const express = require('express');


// local requires
const feedController = require('../controllers/feeds');



// init your router 
const router = express.Router()







// the routes to the controllers where you can find your middlewares
router.get('/post', feedController.getFeed);



module.exports = router;