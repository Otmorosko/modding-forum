// backend/index.js

require('dotenv').config(); 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/user');
const topicRoutes = require('./routes/topic');
app.use('/api/users', userRoutes);
app.use('/api/topics', topicRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Logging all incoming requests to aid debugging
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
