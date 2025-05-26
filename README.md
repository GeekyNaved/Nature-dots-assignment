# 🌿 Nature Dots Assignment

A web application built using **Next.js**, **Tailwind CSS**, and **Material UI**. This app features interactive charts, clean UI components, toast notifications, and date-based functionality.

---

## 🚀 Live Preview

https://nature-dots-assignment.vercel.app/

---

## 🚀 Document explaining the main components of the web application.

https://docs.google.com/document/d/13HQnjxnCnj9n845tQVTlXainEKIcRzIDlQBBXuR_jWw/edit?usp=sharing

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **UI Libraries:** [Material UI](https://mui.com/), [Tailwind CSS](https://tailwindcss.com/)
- **Charting:** [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/)
- **Date Handling:** [dayjs](https://day.js.org/)
- **API Requests:** [Axios](https://axios-http.com/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)


### IMPORTANT NOTE 
create .env file in root folder and create a variable API_KEY then store your API key from https://openaq.org/
```bash
API_KEY = your api key will come here

```

## 📦 Installation Guide

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd nature-dots-assignment

```

### 2. Install Dependencies

```bash
npm install
# or
yarn install

```
### 3. Run the Development Server
```bash
npm run dev
 or
yarn dev
Visit http://localhost:3000 in your browser.

```
### 4. Build for Production
```bash
npm run build

```
### 5. Start the Production Server
```bash
npm run start

```
### 6. Optional: Lint Your Code
```bash
npm run lint

```

### 🧩 Project Structure Overview
```bash
├── components/         # Reusable UI components (e.g., charts, cards)
├── pages/              # Next.js routing system
├── public/             # Static assets
├── styles/             # Tailwind CSS and global styles
├── utils/ or lib/      # Helper functions, API calls (using Axios)
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # Project documentation

```
### 📊 Features
📈 Dynamic charts using Chart.js

📅 Elegant date pickers with MUI X

🔔 Toast notifications for UX feedback

🌈 Styled with Tailwind and MUI

🔄 Axios integration for APIs

### 📚 Available Scripts
```bash
npm run dev           // development server
npm run build	      // Build for production
npm run start	      //Start production server
