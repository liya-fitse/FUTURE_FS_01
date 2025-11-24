import express from "express";
import Message from "../models/Message.js";
import nodemailer from "nodemailer";
const router = express.Router();

// Email transporter setup
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
      });
    }

    // Save to database (optional - can work without MongoDB)
    try {
      const newMessage = new Message({ name, email, message });
      await newMessage.save();
    } catch (dbError) {
      console.log("Database save failed, continuing without DB:", dbError.message);
    }

    // Send email notification (optional)
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL || 'your-email@example.com',
        subject: `New Portfolio Contact: ${name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      };
      
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.log("Email send failed, continuing:", emailError.message);
    }

    res.status(200).json({ 
      success: true, 
      message: "Message received successfully! I'll get back to you soon." 
    });
    
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Something went wrong. Please try again later." 
    });
  }
});

export default router;
