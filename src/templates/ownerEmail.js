const generateOwnerEmail = (userData) => {
  const { name, email, phone } = userData;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333333;
          max-width: 600px;
          margin: 0 auto;
        }
        .header {
          text-align: center;
          margin-bottom: 40px;
        }
        .header h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .header-line {
          border-bottom: 1px solid #333;
          margin: 20px 0;
        }
        .content {
          padding: 0 20px;
        }
        .message {
          margin-bottom: 40px;
        }
        .user-details {
          background-color: #f8f8f8;
          padding: 20px;
          border-radius: 4px;
          margin: 20px 0;
        }
        .signature {
          margin-top: 40px;
          border-top: 1px solid #eee;
          padding-top: 20px;
        }
        .signature p {
          margin: 5px 0;
          color: #666;
        }
        .signature .name {
          color: #333;
          font-weight: normal;
        }
        .signature .title {
          color: #666;
          font-weight: normal;
        }
        .signature .company {
          color: #666;
          font-weight: normal;
        }
      </style>
    </head>
    <body>
      <div class="content">
        <div class="header">
          <h1>VSV Communications</h1>
          <div class="header-line"></div>
        </div>
        
        <div class="message">
          <p>Dear Owner,</p>
          
          <p>We are writing to notify you of a new contact form submission on the VSV Communication website. Below are the details provided by the user:</p>
          
          <div class="user-details">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          </div>

          <p>This submission confirms the user's interest in connecting with your business. We recommend reviewing their details and reaching out to them promptly to address their query or assist them further.</p>

          <p>The contact form on your website is functioning efficiently, ensuring visitors can easily communicate with you. If you require any help managing this submission or need assistance with website-related tasks, feel free to let us know.</p>

          <p>Your prompt response to this inquiry can leave a lasting impression and further strengthen the relationship between your business and its users. Please don't hesitate to contact us if you need any additional support.</p>

          <p>Thank you for using VSV Communication to facilitate seamless communication with your audience.</p>

          <p>Best regards,<br>VSV Communication Team</p>
        </div>
        
        <div class="signature">
          <p class="name">Abhishek Chaturvedi</p>
          <p class="title">Website Designer</p>
          <p class="company">VSV Communications</p>
          <p>Email: avishekchaturvedi0@gmail.com</p>
          <p>Phone: +91-7503398293</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = generateOwnerEmail;
