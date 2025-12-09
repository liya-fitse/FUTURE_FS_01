import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// Verify environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing email credentials in environment variables");
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error("Transporter verification failed:", error);
    } else {
        console.log("Email transporter is ready");
    }
});

router.post("/", async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        console.log("Attempting to send email...");
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (err) {
        console.error("Detailed email error:", {
            message: err.message,
            code: err.code,
            command: err.command,
            response: err.response
        });
        res.status(500).json({ 
            message: "Failed to send email",
            error: err.message 
        });
    }
});

export default router;
