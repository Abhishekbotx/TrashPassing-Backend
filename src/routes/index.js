
const express = require('express');
const messageRoutes = require('./v1/messageRoutes');


const router = express.Router();
router.use('/v1',messageRoutes)

module.exports = router;