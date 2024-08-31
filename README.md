# Vendor Management System

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

## Overview

The Vendor Management System is a Node.js-based backend application that provides functionalities for managing vendors and purchase orders. It uses MongoDB for data storage and JWT (JSON Web Token) for securing the API endpoints.

## Features

- **Vendor Management**: Create, Read, Update, and Delete vendors.
- **Purchase Order Management**: Create, Read, Update, and Delete purchase orders.
- **JWT-based Authentication**: Secure API endpoints with token-based authentication.
- **Performance Metrics**: Calculate performance metrics for vendors.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Vendor Management](#vendor-management)
  - [Purchase Order Management](#purchase-order-management)
- [Testing the API](#testing-the-api)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14.x or above
- **MongoDB**: Version 4.x or above (running locally or remotely)
- **Postman** or any API testing tool

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/vendor-management-system.git
   cd vendor-management-system
2. **Install Dependencies**

   Install the required packages by running:

   ```bash
   npm install
3. **Configure Environment Variables**

  Create a .env file in the root directory and add the following:

  ```bash
  PORT=3000
  MONGO_URI=mongodb://localhost:27017/vendorManagementDB
  JWT_SECRET=your_jwt_secret
  ```
PORT: The port number on which your server will run.
MONGO_URI: Your MongoDB connection string.
JWT_SECRET: A secret key for signing JWT tokens. Replace your_jwt_secret with a secure, random string.


4. **Configure Environment Variables**
  For Linux Users:
  ```bash
  sudo systemctl start mongod
  ```
  For Windows Users:

  Open the Command Prompt or PowerShell as an administrator.

  Start MongoDB by running:
  ```bash
  net start MongoDB
  ```

