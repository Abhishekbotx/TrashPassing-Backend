const { newServiceRequest } = require('../mail/ServiceRequest');
const mailsender = require('../utils/nodemailer');
const Message = require('./../models/message')

const checkin = async (req, res) => {
    try {
        const { fullName, phoneNumber, email, message } = req.body

        const response = await Message.create({ fullName, phoneNumber, email, message })
        console.log(response);
        mailsender('Abhishekbotx@gmail.com', 'New Service request',newServiceRequest(fullName,email,phoneNumber,message))
        res.status(200).json({
            success: true,
            response: response
        })
    } catch (error) {
        throw error
    }
}
module.exports = {
    checkin
}