const nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = require('../env');
const Contact = require('../models/Contact');
const { generateUserEmail, generateOwnerEmail } = require('../src/templates');

const OWNER_EMAIL = 'vsvcommunications.avishek@gmail.com';

const mailController = async (req, res) => {
    const { email: userEmail, name: userName, phone } = req.body;

    if (!userEmail || !userName || !phone) {
        return res.status(400).json({ error: "Email address, name, and phone are required" });
    }

    try {
        // Save contact to MongoDB
        await Contact.create({
            name: userName,
            email: userEmail,
            phone: phone
        });

        let config = {
            service: "gmail",
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        }

        let transporter = nodemailer.createTransport(config);

        // Send email to user
        let userMailOptions = {
            from: EMAIL,
            to: userEmail,
            subject: "Thanks for Contacting VSV Communications",
            html: generateUserEmail({ name: userName, email: userEmail, phone: phone })
        }

        // Send email to owner
        let ownerMailOptions = {
            from: EMAIL,
            to: OWNER_EMAIL,
            subject: "New Contact Form Submission - VSV Communications",
            html: generateOwnerEmail({ name: userName, email: userEmail, phone: phone })
        }

        await transporter.sendMail(userMailOptions);
        await transporter.sendMail(ownerMailOptions);

        res.status(200).json({ success: true, message: "Thanks for Contacting VSV Communications" });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: "Failed to send email" });
    }
};

module.exports = { mailController };