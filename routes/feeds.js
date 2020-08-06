const express = require('express');


// local requires
const feedController = require('../controllers/feeds');



// init your router 
const router = express.Router()







// the routes to the controllers where you can find your middlewares
// GET /post/post
router.get('/post', feedController.getFeed);

// POST /post/add
router.post('/add', feedController.postfeed)


module.exports = router;