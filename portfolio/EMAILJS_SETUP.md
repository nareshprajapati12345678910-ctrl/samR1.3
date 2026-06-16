# EmailJS Setup Guide

This document guides you through setting up EmailJS for your portfolio's contact form.

## Step 1: Create an EmailJS Account

1. Visit [EmailJS](https://www.emailjs.com)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Get Your Public Key

1. After logging in, go to the **Account** section (click your profile icon)
2. Copy your **Public Key** from the dashboard
3. You'll use this to initialize EmailJS in your application

## Step 3: Create an Email Service

1. In EmailJS dashboard, click **Email Services** (left sidebar)
2. Click **Add Service**
3. Choose your email provider:
   - **Gmail**: Select Gmail and authorize EmailJS to send emails from your Gmail account
   - **Other providers**: Follow the provider-specific setup
4. Complete the setup and copy your **Service ID**

## Step 4: Create an Email Template

1. Click **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Use this template example:

```
Name: Contact Form Submission

Subject: New Inquiry from {{from_name}}

Email Content:
---

You have a new inquiry:

Name: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}

Message:
{{message}}

---
```

4. Save the template and copy your **Template ID**

## Step 5: Add Environment Variables

1. Create a `.env` file in your portfolio root directory
2. Copy the content from `.env.example` and fill in your credentials:

```
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email inbox for the contact form submission

## Important Notes

- **Never commit `.env` file to version control** - it contains sensitive credentials
- Keep your Public Key secure
- The `.env.example` file shows the required variables without actual credentials
- For production, set environment variables through your hosting provider's settings panel
- EmailJS has a free tier with up to 200 emails/month

## Troubleshooting

If you don't receive emails:
1. Check EmailJS dashboard for any error notifications
2. Verify Service ID and Template ID are correct
3. Check your spam folder
4. Ensure your email service (Gmail, etc.) is properly authorized in EmailJS
5. Open browser console (F12) to check for any JavaScript errors

## Template Variable Reference

The contact form automatically sends these variables to your template:

- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{project_type}}` - Selected project type
- `{{message}}` - Visitor's message

You can customize the email template in EmailJS dashboard to format these variables however you like.
