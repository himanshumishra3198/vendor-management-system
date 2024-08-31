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
5. **Running the Application**
   To start the server, use:
   ```bash
   npm start
   ```

## API Endpoints
1. **Authentication**
   Register a New User
   Endpoint: `POST /auth/register`
   Description: Registers a new user.
   Request Body:
   ```bash
      {
       "username": "user",
       "password": "password"
      }
   ```
   Response: Returns a success message with user details.

2. **Login a User**
   Endpoint: `POST /auth/login`
   Description: Logs in a user and returns a JWT token.
   Request Body:
   ```bash
      {       
       "username": "user",
       "password": "password"
      }
   ```
   Response: Returns a JWT token.

## Vendor Management
1. **Create a Vendor**
   Endpoint: `POST /vendors`
   Headers: Authorization: Bearer <token>
   Request Body:
   ```bash
     {
    "name": "Vendor Name",
    "contactDetails": "contact@example.com",
    "address": "123 Vendor Street",
    "vendorCode": "VENDOR001"
    }
   ```
   Response: Returns the created vendor details.
   
3. **Get All Vendors**
   Endpoint: GET /vendors
   Headers: Authorization: Bearer <token>
   Response: Returns a list of all vendors.

4. **Get Vendor by ID**
   Endpoint: GET /vendors/:vendorId
   Headers: Authorization: Bearer <token>
   Response: Returns the vendor details.

4. **Update Vendor**
    Endpoint: PUT /vendors/:vendorId
    Headers: Authorization: Bearer <token>
    Request Body: Fields to be updated.
    Response: Returns the updated vendor details.

5. **Delete Vendor**
    Endpoint: DELETE /vendors/:vendorId
    Headers: Authorization: Bearer <token>
    Response: Returns a success message.

## Purchase Order Management

1. **Create a Purchase Order**
    Endpoint: `POST /purchase-orders`
    Headers: Authorization: Bearer <token>
    Request Body:
    ```bash
    {
      "poNumber": "PO12345",
      "vendor": "vendorId",
      "orderDate": "2024-08-30",
      "items": [
        {
          "itemName": "Item1",
          "quantity": 10
        }
      ],
      "quantity": 10,
      "status": "pending"
    }
    ```
    Response: Returns the created purchase order details.

3. **Get All Purchase Orders**
    Endpoint: GET /purchase-orders
    Headers: Authorization: Bearer <token>
    Response: Returns a list of all purchase orders.

4. **Get Purchase Order by ID**
    Endpoint: GET /purchase-orders/:poId
    Headers: Authorization: Bearer <token>
    Response: Returns the purchase order details.

5. **Update Purchase Order**
    Endpoint: PUT /purchase-orders/:poId
    Headers: Authorization: Bearer <token>
    Request Body: Fields to be updated.
    Response: Returns the updated purchase order details.
   
6. **Delete Purchase Order**
    Endpoint: DELETE /purchase-orders/:poId
    Headers: Authorization: Bearer <token>
    Response: Returns a success message.

## Testing the API
You can test the API endpoints using Postman or any other API testing tool.

1. **Authentication:** Register a new user or log in to obtain a JWT token.
2. **Set Authorization Header:** Use the JWT token in the Authorization header as follows: Bearer <your_token>.
3. **Call Endpoints:** Make API calls to the desired endpoints with the appropriate method, headers, and body.

