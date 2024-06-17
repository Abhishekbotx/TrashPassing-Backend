const express = require('express');
const { checkin } = require('./../../controller.js/message-controller');
const ValidateMiddleware=require('./../..//middlewares/validate');
const CheckInSchema=require('./../../validators/checkinValidation')
const router = express.Router();
router.post('/checkin',ValidateMiddleware(CheckInSchema), checkin);

module.exports = router;