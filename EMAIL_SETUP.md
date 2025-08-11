# Email Notification Setup

## Overview
Jab koi user meeting schedule karta hai, to admin ko automatically email notification send hoti hai.

## Setup Instructions

### 1. Environment Variables
`.env.local` file mein ye variables set karein:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@yourcompany.com
```

### 2. Gmail Setup (Recommended)
Agar aap Gmail use kar rahe hain:

1. **2-Factor Authentication enable karein**
   - Google Account settings mein jaakar 2FA on karein

2. **App Password generate karein**
   - Google Account > Security > 2-Step Verification > App passwords
   - "Mail" select karein aur password generate karein
   - Ye password `EMAIL_PASS` mein use karein (regular password nahi)

3. **Environment variables update karein**
   ```env
   EMAIL_USER=youremail@gmail.com
   EMAIL_PASS=generated-app-password
   ADMIN_EMAIL=admin@yourcompany.com
   ```

### 3. Other Email Services
Agar aap Gmail ke alawa koi aur service use karna chahte hain:

#### Outlook/Hotmail
```javascript
service: 'hotmail'
```

#### Custom SMTP
```javascript
host: 'your-smtp-server.com',
port: 587,
secure: false,
auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
}
```

## Features

### Email Content
Admin ko ye information milti hai:
- Client ka naam aur email
- Meeting ka date aur time
- Client ka message (agar koi hai)
- Professional HTML formatting

### Error Handling
- Agar email send nahi hoti, meeting booking fail nahi hoti
- Console mein error log hoti hai
- User ko appropriate message show hota hai

## Testing

1. Contact page par jaakar meeting schedule karein
2. Console mein email details check karein
3. Admin email account mein notification check karein

## Troubleshooting

### Common Issues:
1. **"Invalid login"** - App password use karein, regular password nahi
2. **"Less secure app access"** - 2FA enable karke app password use karein
3. **Email not received** - Spam folder check karein

### Development Mode:
Development mein email details console mein log hoti hain, actual email send hone ke saath.