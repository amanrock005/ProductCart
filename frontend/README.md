# Frontend Setup And Logic

## Features
- View all products
- Add a new product
- Delete a product
- Responsive and styled with Tailwind CSS

---

## Project Structure
```
│
├── components/
│ ├── ProductForm.jsx
│ └── ProductItem.jsx
│
├── pages/
│ └── ProductManager.jsx
│
├── utils/
│ └── axiosInstance.js
│
├── App.js
└── index.js
```

## Setup 

### Step 1: Clone the repo
```bash
git clone https://github.com/amanrock005/ProductCart.git
cd ProductCart/frontend
```

### Step 2: Install dependencies 
```bash
npm install
```

### Step 3: Start the development server
```bash
npm start
```

## API Base URL

Make sure your backend is running on http://localhost:3000, and you've configured axiosInstance.js like this:

```bash
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});
```

## Tech STack
- React
- Axios
- Tailwind CSS
- Vite
