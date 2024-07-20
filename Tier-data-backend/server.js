const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customer.routes');
const authRoutes = require('./routes/auth.routes');
const meterRoutes = require('./routes/meter.routes')
const prepaidBalanceRoutes = require('./routes/balance.routes')
const meterReadingRoutes = require('./routes/reading.routes')
const notificationRouter = require('./routes/sms.routes')
const cors = require('cors');


const app = express();

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization',
};

app.use(cors(corsOptions));
const PORT = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use('/api/cust', customerRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/meters', meterRoutes);
app.use('/api/balance', prepaidBalanceRoutes); // Adjust the path as needed
app.use('/api/readings', meterReadingRoutes);
app.use('/api/sms', notificationRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
