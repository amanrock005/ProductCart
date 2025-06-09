# Product API 

A simple Node.js and express-based REST API to perform basic CRUD operations.

--- 

## Features 

- Get all products
- Add a new product
- Delete a product by ID
- Uses a flat file (`products.json`) as the database
- Users [`http-status-code`]

--- 

## Tech Stack
- Noe.js
- Express.js
- File System (`fs`) module
- `http-status-codes` package

## Project Structure
```
backend/
│
├── controllers/
│   └── product.controller.js
│
├── routes/
│   └── product.route.js
│   
|
|__ middleware/
|    └──cleanUpProducts.js
|
├── db/
│   └── products.json
│
├── server.js
└── README.md
```


## API Endpoints

### Base URL:

`http://localhost:3000/api/v1/products`

---

**GET** `/`

**Response:**
```json
{
  "success": true,
  "products": [ ... ]
}
```

--- 

**POST** `/addproduct`

**Request Body:**
```
{
    "id": 1,
    "name": "noteboook",
    "category": "stationary",
    "price": "324",
    "description": "ljsldkjf"
  }
```

**Response:**
```
{
  "success": true,
  "product": {
    "id": 2,
    "name": "shampoo",
    "category": "hygiene",
    "price": 5,
    "description": "hair cleaner"
  }
}
```

## How to Setup the backend

### Step 1: Clone Repo
```bash
git clone https://github.com/amanrock005/ProductCart.git
cd backend
```

### Step 2: Install dependency
```bash
npm i
```

---

## Improvements

- Input Validation using `Joi` or `zod`
- Logging middleware (like `morgan`)
- Persist data in a database (MongoDB, PostgreSQL)
- Add update and search functionality


