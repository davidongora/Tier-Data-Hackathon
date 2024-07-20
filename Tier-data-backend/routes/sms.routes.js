const express = require('express');
const africastalking = require('africastalking');
const router = express.Router();

const credentials = africastalking({
    username: 'sandbox',
    apiKey: 'atsk_4d9ad34b68cc758260d42c38ec2eed10c41c1fde5740aedd4084a3188bc26320525c3361'
});

const notify = async (req, res) => {
    try {
        const response = await credentials.SMS.send({
            to: '+254112027035',
            message: 'Dear David, your prepaid balance is running low. Please top up soon to ensure uninterrupted service. Thank you!',
            from: 'smartWater'
        });
        console.log('Message sent successfully:', response);
        res.status(200).send('Message sent successfully');
    } catch (err) {
        console.error('Error while sending your message:', err);
        res.status(500).send('Error while sending your message');
    }
};

router.post('/notification', notify);

module.exports = router;
