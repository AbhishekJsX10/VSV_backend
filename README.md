# VSV Communications Backend

This is the backend server for VSV Communications website. It provides APIs for mail functionality and homepage data.

## Project Structure

```
Backend/
├── config/
│   └── db.js              # Database configuration
├── controllers/
│   ├── mail-Controller.js # Mail functionality controller
│   └── home-Controller.js # Homepage data controller
├── models/
│   └── ...               # Database models
├── routes/
│   ├── Mail-routes.js    # Mail routing
│   └── Home-routes.js    # Homepage routing
├── middlewares/          # Custom middleware functions
├── .env                  # Environment variables
├── .gitignore           # Git ignore file
├── package.json         # Project dependencies
└── server.js           # Main application file
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
```

## API Endpoints

### Mail Routes
- **POST** `/api-mail/mail`
  - Sends emails through the system
  - Body: 
    ```json
    {
      "to": "recipient@email.com",
      "subject": "Email Subject",
      "text": "Email Content"
    }
    ```

### Homepage Routes
- **GET** `/homepage`
  - Retrieves homepage data

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file with required environment variables
4. Start the server:
   ```bash
   # Development
   npm start
   
   # Production
   NODE_ENV=production npm start
   ```

## Dependencies

- express: ^4.21.2
- mongoose: ^8.9.0
- cors: ^2.8.5
- dotenv: ^16.4.7
- nodemailer: ^6.9.16
- mailgen: ^2.0.28

## Production Deployment Checklist

1. Set appropriate environment variables
2. Enable security middlewares
3. Set up proper error handling
4. Configure CORS appropriately
5. Set up logging
6. Configure rate limiting
7. Enable compression
8. Set secure HTTP headers

## Error Handling

The application uses a centralized error handling mechanism. All errors are logged and appropriate error responses are sent to the client.

## Security Measures

- Environment variables for sensitive data
- CORS protection
- Input validation
- Rate limiting (recommended for production)
- Secure headers (recommended for production)

## Contributing

1. Create a new branch
2. Make changes
3. Submit a pull request

## License

ISC
