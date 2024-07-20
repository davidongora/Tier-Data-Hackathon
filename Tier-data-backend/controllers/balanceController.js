const connection = require('../config/db.config'); // Adjust the path as needed
const AfricasTalking = require('africastalking');

// Set your app credentials
const credentials = {
    apiKey: 'atsk_bd92cf71715b67722a284c045c440ff2043f4c32b1c8ba4627857e856e6c2f0face7fe15',
    username: 'sandbox',
};

// Initialize the SDK
const AfricasTalkingClient = AfricasTalking(credentials);
const sms = AfricasTalkingClient.SMS;

// Notify customers of low balances
function notifyLowBalance(phoneNumber) {
    const options = {
        to: [phoneNumber],
        message: "Your prepaid balance is low. Please top up to avoid service interruptions.",
        from: 'YourServiceName' // Replace with your service name or shortcode
    };

    sms.send(options)
        .then(response => console.log('SMS sent:', response))
        .catch(error => console.error('Error sending SMS:', error));
}

// Update meter status based on balance
function checkAndUpdateMeterStatus(customerId, balance) {
    const newStatus = balance <= 0 ? 'Off' : 'On';
    connection.query(
        'UPDATE meters SET status = ? WHERE customer_id = ?',
        [newStatus, customerId],
        (err) => {
            if (err) console.error('Error updating meter status:', err);
        }
    );
}

// Display customer prepaid balances and notify low balances
exports.getPrepaidBalances = (req, res) => {
    const query = `
        SELECT c.id AS customer_id, c.name, c.email, b.balance, m.status AS meter_status
        FROM balances b
        JOIN customers c ON b.customer_id = c.id
        JOIN meters m ON c.id = m.customer_id
    `;

    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }

        // Notify customers with low balance and update meter status
        results.forEach(record => {
            if (record.balance <= 0) {
                notifyLowBalance(record.email); // Assuming email is used for phone numbers; adjust if necessary
                checkAndUpdateMeterStatus(record.customer_id, record.balance);
            } else if (record.balance < 50) {
                notifyLowBalance(record.email); // Notify if balance is below threshold
            }
        });

        res.status(200).json(results);
    });
};
