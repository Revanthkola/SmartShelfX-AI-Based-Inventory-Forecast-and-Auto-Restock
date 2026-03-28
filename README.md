# SmartShelfX – AI-Based Inventory Forecast & Auto-Restock

## 🚀 Overview

**SmartShelfX** is an inventory management system designed to track products, manage stock, and support intelligent decision-making for restocking.

The system helps reduce stock shortages and overstock by providing structured inventory tracking and basic forecasting support.

---

## 🧠 Key Features

* 📦 Inventory management (SKU & Product tracking)
* 🔄 Product stock update (Purchase & Issue)
* 📊 Basic demand analysis support
* 🔍 Search and filter functionality
* 📈 Transaction tracking (Inward & Outward)
* 👥 Role-based access (Admin / Manager / Vendor)

---

## 🏗️ Project Structure

```
SmartShelfX/
│
├── inventory-front/        # React Frontend
├── InventoryProject/       # Backend (Spring Boot API)
├── README.md
```

---

## 🧰 Tech Stack

### Frontend

* React.js
* Bootstrap
* Custom CSS (Dark Theme UI)

### Backend

* Java
* Spring Boot
* REST APIs

### Database

* MySQL

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/Revanthkola/SmartShelfX-AI-Based-Inventory-Forecast-and-Auto-Restock.git
cd SmartShelfX-AI-Based-Inventory-Forecast-and-Auto-Restock
```

---

### 2. Setup Frontend

```bash
cd inventory-front
npm install
npm start
```

Runs on: `http://localhost:3000`

---

### 3. Setup Backend

```bash
cd ../InventoryProject
mvn spring-boot:run
```

Runs on: `http://localhost:8080`

---

### 4. Database Setup

* Create a database (e.g., `inventory_db`)
* Configure DB credentials in backend
* Import required tables

---

## 🔄 How It Works

1. Admin adds SKU and product details
2. Products are stored and managed in the system
3. Transactions update stock levels
4. System tracks inventory status
5. Admin monitors and manages stock

---

## 📌 Future Improvements

* Improve demand prediction logic
* Add analytics dashboard
* Deploy to cloud
* Add notifications for low stock

---

## 🤝 Contributing

Contributions are welcome.
Please open an issue before making major changes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Revanth Kola
GitHub: https://github.com/Revanthkola

---

## ⭐ Support

If you find this project useful, please give it a ⭐ on GitHub.
