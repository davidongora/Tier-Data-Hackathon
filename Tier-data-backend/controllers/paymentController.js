const db = require('../config/db'); // Your database connection file
const AfricasTalking = require('africastalking');

// Set your app credentials
const credentials = {
    apiKey: 'YOUR_API_KEY',
    username: 'YOUR_USERNAME',
};

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);
const sms = AfricasTalking.SMS;

// Function to send reminder SMS
const sendReminder = (phoneNumber, message) => {
    const options = {
        to: [phoneNumber],
        message: message,
        from: 'YOUR_SENDER_ID'
    };

    return sms.send(options)
        .then(response => console.log('Message sent:', response))
        .catch(error => console.error('Error sending message:', error));
};

// Add Payment
exports.addPayment = async (req, res) => {
    const { customerId, amount } = req.body;

    try {
        // Record the payment
        await db.query('INSERT INTO payments (customer_id, amount) VALUES (?, ?)', [customerId, amount]);

        // Update balance
        await db.query('UPDATE balances SET balance = balance - ? WHERE customer_id = ?', [amount, customerId]);

        // Check if balance is low
        const [rows] = await db.query('SELECT balance FROM balances WHERE customer_id = ?', [customerId]);
        if (rows[0].balance < 50) {
            // Send reminder
            const [customer] = await db.query('SELECT * FROM customers WHERE id = ?', [customerId]);
            await sendReminder(customer.phone, `Your balance is low. Please top-up your account.`);
        }

        res.status(200).json({ message: 'Payment recorded and balance updated.' });
    } catch (error) {
        res.status(500).json({ message: 'Error recording payment', error });
    }
};

// Display Payments and Balance
exports.getPaymentsAndBalance = async (req, res) => {
    const { customerId } = req.query;

    try {
        const [payments] = await db.query('SELECT * FROM payments WHERE customer_id = ?', [customerId]);
        const [balance] = await db.query('SELECT balance FROM balances WHERE customer_id = ?', [customerId]);

        res.status(200).json({ payments, balance: balance[0].balance });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving payments and balance', error });
    }
};
