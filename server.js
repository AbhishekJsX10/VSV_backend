require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const morgan = require('morgan');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

// Import routes
const mailRouter = require('./routes/Mail-routes');
const homeRouter = require('./routes/Home-routes');

// Security Middleware
app.use(helmet()); // Adds various HTTP headers for security
app.use(compression()); // Compress responses
app.use(morgan('combined')); // Logging

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// CORS configuration
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://vsv-frontend.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Basic Middleware
app.use(express.json({ limit: '10kb' })); // Body limit is 10kb

// routes
app.use("/api-mail", mailRouter);
app.use("/homepage", homeRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        status: 'error',
        message: process.env.NODE_ENV === 'production' 
            ? 'Internal server error' 
            : err.message
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Route not found'
    });
});

// Start server with error handling
const server = app.listen(port, () => {    
    console.log(`VSV Backend listening on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Trying port ${port + 1}`);
        server.listen(port + 1);
    } else {
        console.error('Server error:', err);
    }
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});