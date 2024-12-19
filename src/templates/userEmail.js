const generateUserEmail = (userData) => {
  const { name } = userData;
  
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
          color: #333333;
        }
        .header h1 {
          font-size: 24px;
          margin-bottom: 10px;
          color: #333333;
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
          color: #333333;
        }
        .message p {
          color: #333333;
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
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to VSV Communications. We have received your contact information and appreciate your interest in our services.</p>
          
          <p>Our team is dedicated to providing exceptional communication solutions tailored to your needs. We will review your inquiry and one of our representatives will contact you shortly to discuss how we can best assist you.</p>
          
          <p>In the meantime, feel free to explore our website to learn more about our services and successful projects.</p>
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

module.exports = generateUserEmail;
