# 🏡 MERN-based Real Estate Platform

A modern, full-stack **Real Estate Web Application** built using the **MERN stack**, offering a responsive UI, real-time features, and a secure backend. This platform enables property listings, live updates, user authentication, and more — ideal for showcasing or searching properties.

---

## 🔧 Tech Stack

* **Frontend**: React + Vite + SCSS
* **Backend**: Node.js + Express.js
* **Database**: MongoDB with Prisma (as ORM)
* **Real-time Communication**: Socket.IO
* **Other Tools**: JWT for authentication, Cloudinary for image uploads

---

## 📁 Project Structure

/
├── client # React frontend using Vite and SCSS
├── api    # Express backend with Prisma ORM
└── socket # Socket.IO server for real-time features


---

## 📦 Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone [https://github.com/Talish1234/mern-real-estate](https://github.com/Talish1234/mern-real-estate)
cd real-estate-app 
```
### 2.  Install Dependencies
You'll need to install dependencies in each part of the project. Navigate into each respective directory (client, api, socket) and run npm install:
# In the client directory
cd client
npm install

# Go back to the root and then into the api directory
cd ../api
npm install

# Go back to the root and then into the socket directory
cd ../socket
npm install

### 3. Setup Environment Variables
You need to create .env files in both api and socket directories.

# api/.env
```env
DATABASE_URL=mongodb+srv://<your-mongo-connection>
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
# socket/.env
```env
PORT=6000
```
### 4. Start the Project
Start each part of the application using the commands below.

# Start Backend API (/api)
```bash
cd api
npm start
```
# Start Socket Server (/socket)
```bash
cd socket
npm start
```
# Start Frontend (/client)
```bash
cd client
npm run dev
```
📍 Your app will now be running at: http://localhost:5173
