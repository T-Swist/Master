import { ContactFormData } from '../types';

export const getAutoResponseTemplate = (data: ContactFormData): string => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #262525; color: #9acd32; padding: 30px; text-align: center; }
    .content { background: #f9f9f9; padding: 30px; }
    .service-box { background: #fff; padding: 15px; margin: 10px 0; border-left: 4px solid #9acd32; }
    .footer { background: #262525; color: #fff; padding: 20px; text-align: center; }
    .social-links { margin: 20px 0; }
    .social-links a { color: #9acd32; text-decoration: none; margin: 0 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thompson N Daiminah Jr</h1>
      <p>Frontend Web Developer, Mobile App Developer & Residential Electrician</p>
    </div>
    
    <div class="content">
      <h2>Hello ${data.name}!</h2>
      <p>Thank you for reaching out to me. I've received your message and I'm excited to learn more about your project!</p>
      
      <h3>What Happens Next?</h3>
      <p>I will review your inquiry and get back to you within <strong>24-48 hours</strong>. In the meantime, feel free to explore my work and services.</p>
      
      <h3>My Services</h3>
      <div class="service-box">
        <h4>🌐Frontend Web Development</h4>
        <p>Building responsive, conversion-focused websites using modern technologies.</p>
      </div>
      <div class="service-box">
        <h4>🎨Frontend Mobile App Development</h4>
        <p>Building responsive, conversion-focused mobile applications using modern technologies.</p>
      </div>
      <div class="service-box">
        <h4>✨ Residential Electrician</h4>
        <p>Providing safe, reliable electrical services for homes and businesses.</p>
      </div>
      
      <h3>Portfolio Highlights</h3>
      <p>Check out some of my recent projects:</p>
      <ul>
        <li>Jett Electric - Business Website</li>
        <li>T-Swist Fingers - Portfolio Site</li>
        <li>Dream To Live - Creative Project</li>
      </ul>
      
      <div class="social-links">
        <p><strong>Connect with me:</strong></p>
        <a href="https://github.com/T-Swist">GitHub</a> |
        <a href="https://www.linkedin.com/in/thompson-daiminah-ba614929a/">LinkedIn</a> |
        <a href="https://web.facebook.com/tswist.daiminah">Facebook</a>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Thompson N Daiminah Jr</strong></p>
      <p>Web Developer, Mobile App Developer & Residential Electrician | Liberia</p>
      <p style="color: #9acd32;">Available 24/7 for Support</p>
      <p style="font-size: 12px; margin-top: 20px;">
        © ${new Date().getFullYear()} Thompson N Daiminah Jr. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
  `;
};

export const getNotificationTemplate = (data: ContactFormData): string => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
    .header { background: #262525; color: #9acd32; padding: 20px; text-align: center; }
    .info-row { padding: 10px; border-bottom: 1px solid #ddd; }
    .label { font-weight: bold; color: #262525; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🎉 New Contact Form Submission</h2>
    </div>
    
    <div style="padding: 20px; background: #fff;">
      <div class="info-row">
        <span class="label">Name:</span> ${data.name}
      </div>
      <div class="info-row">
        <span class="label">Email:</span> ${data.email}
      </div>
      <div class="info-row">
        <span class="label">Phone:</span> ${data.phone || 'Not provided'}
      </div>
      <div class="info-row">
        <span class="label">Company:</span> ${data.company || 'Not provided'}
      </div>
      <div class="info-row">
        <span class="label">Project Type:</span> ${data.projectType}
      </div>
      <div class="info-row">
        <span class="label">Budget:</span> ${data.budget}
      </div>
      <div class="info-row">
        <span class="label">Message:</span><br>
        <p style="margin-top: 10px; padding: 15px; background: #f9f9f9; border-left: 4px solid #9acd32;">
          ${data.message}
        </p>
      </div>
      <div class="info-row">
        <span class="label">Submitted:</span> ${new Date().toLocaleString()}
      </div>
    </div>
  </div>
</body>
</html>
  `;
};
