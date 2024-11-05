# Zoroz E-commerce Website

A dynamic, fully responsive e-commerce web application built with modern technologies for a seamless shopping experience.

## Overview

Zoroz combines the power of **React + Vite**, **Firebase**, **Firestore**, and **Razorpay** to deliver a comprehensive e-commerce solution with distinct User and Admin functionalities.

## Features

### User Features
- 🛍️ Browse and view detailed product information
- 🔍 Filter products by price range and type
- 📱 Fully responsive design (mobile, tablet, desktop)
- 💳 Secure payments via Razorpay integration

### Admin Features
- ✨ Complete product management (Add/Update/Delete)
- 🔄 Real-time database updates with Firestore
- 📊 Inventory tracking and management

## Tech Stack

- **Frontend:** React, Vite
- **Backend:** Firebase
- **Database:** Firestore
- **Payment:** Razorpay

## Getting Started

### Prerequisites

- Node.js
- Firebase Account
- Razorpay Account (API Key and Secret Key)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/Zoroz.git
cd Zoroz
```

2. Install dependencies
```bash
npm install
```

3. Configure Firebase
   - Create a Firebase project
   - Enable Firestore and Authentication
   - Add Firebase credentials to `.env`:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Set up Razorpay
   - Add Razorpay credentials to `.env`:
```env
VITE_RAZORPAY_KEY_ID=your_key_id
VITE_RAZORPAY_SECRET=your_secret
```

5. Start the development server
```bash
npm run dev
```

## Project Structure

```
zoroz/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── firebase/
│   └── utils/
├── public/
├── .env
└── package.json
```

## Deployment

The application can be deployed to:
- Firebase Hosting
- Vercel
- Netlify

Follow the respective platform's deployment guidelines for hosting.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Firebase](https://firebase.google.com/)
- [Razorpay](https://razorpay.com/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
