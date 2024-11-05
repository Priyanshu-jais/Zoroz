Zoroz E-commerce Website
Zoroz is a dynamic, fully responsive e-commerce web application built with React + Vite on the frontend, Firebase for backend services, Firestore for database management, and Razorpay for payment processing. The application supports both User and Admin accounts, each with distinct functionalities.

Features
User Account
Product Viewing: Browse and view detailed information about each product.
Product Filtering: Filter products based on price range and type.
Responsive Design: Enjoy a seamless experience across devices, including mobile, tablet, and desktop.
Secure Payments: Make payments using Razorpay with integrated key and secret key for secure transactions.

Admin Account
Product Management: Add, update, and delete products in the store.
Real-Time Database: Manage and view changes instantly with Firestore integration.

Tech Stack
Frontend: React, Vite, Tailwind css, Headless UI
Backend: Firebase
Database: Firestore
Payment Gateway: Razorpay
Getting Started
Prerequisites
Node.js
Firebase Account
Razorpay Account (API Key and Secret Key)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/Zoroz.git
cd Zoroz
Install dependencies:

bash
Copy code
npm install
Set up Firebase and Firestore:

Create a Firebase project.
Enable Firestore and Firebase Authentication.
Configure Firebase credentials in .env.
Configure Razorpay:

Get your Razorpay API Key and Secret Key.
Add the keys to your .env file.
Run the application:

bash
Copy code
npm run dev
Project Structure
Frontend: Built with React and Vite, providing a fast and optimized development experience.
Backend: Firebase for authentication, Firestore for database management, and real-time data handling.
Deployment
Zoroz can be deployed on various platforms such as Firebase Hosting, Vercel, or Netlify for seamless access and management.


Acknowledgements
Firebase
Firestore
Razorpay
Vite
