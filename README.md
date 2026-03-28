# SmartShelfX – AI-Based Inventory Forecast & Auto-Restock

## 🚀 Overview

**SmartShelfX** is an AI-driven inventory management system designed to predict product demand and automate restocking decisions.
It helps businesses minimize stock shortages, reduce overstock, and improve operational efficiency using intelligent forecasting.

---

## 🧠 Key Features

* 📊 **Demand Forecasting** using Machine Learning models
* 🔄 **Auto Restock Suggestions** based on predicted demand
* 📦 **Inventory Management Dashboard** for real-time tracking
* 📉 **Stock Optimization** to reduce overstock & stockouts
* 🔍 **Search & Filter System** for products and SKU
* 📈 **Transaction Monitoring** (Inward & Outward stock)

---

## 🏗️ Project Architecture

```
SmartShelfX/
│
├── inventory-front/        # React Frontend (UI)
├── InventoryProject/       # Backend (API + ML logic)
├── README.md
```

---

## 🧰 Tech Stack

### Frontend

* React.js
* Bootstrap (UI Components)
* CSS (Custom Dark Theme)

### Backend

* Java / Spring Boot (API)
* REST APIs


### Database

* MySQL / SQL-based DB

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Revanthkola/SmartShelfX-AI-Based-Inventory-Forecast-and-Auto-Restock.git
cd SmartShelfX-AI-Based-Inventory-Forecast-and-Auto-Restock
```

---

### 2️⃣ Setup Frontend (React)

```bash
cd inventory-front
npm install
npm start
```

➡️ Runs on: `http://localhost:3000`

---

### 3️⃣ Setup Backend

```bash
cd ../InventoryProject
```

👉 Then run your backend (example):

```bash
mvn spring-boot:run
```

➡️ Runs on: `http://localhost:8080`

---

### 4️⃣ Database Setup

* Create a database (e.g., `inventory_db`)
* Update DB credentials in backend config
* Import required tables (if provided)

---

## 🔄 How It Works

1. Admin adds SKU and product details
2. System tracks stock levels and transactions
3. ML model predicts future demand
4. System suggests restock quantity
5. Admin takes action based on insights

---

## 📌 Future Improvements

* 🔹 Improve prediction accuracy with advanced ML models
* 🔹 Add real-time analytics dashboard
* 🔹 Implement role-based access control enhancements
* 🔹 Deploy on cloud (AWS / Azure / Render)
* 🔹 Add notifications for low stock

---

## 🧪 Possible Enhancements (High Impact)

* 📉 Time-series forecasting (LSTM / ARIMA)
* 📊 Interactive charts (Chart.js / Recharts)
* 🔔 Email / SMS alerts
* 📦 Barcode / QR inventory integration

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make changes
4. Submit a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Revanth Kola**

* GitHub: https://github.com/Revanthkola

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
