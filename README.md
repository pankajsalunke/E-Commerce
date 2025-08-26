# Eyesome E-Commerce (React + Vite)

A modern e-commerce web application built with React, Vite, and Tailwind CSS. This project features product browsing, cart, wishlist, and authentication functionality.

## Features

- Browse trending products
- Add/remove items from cart and wishlist (localStorage)
- Responsive design with Tailwind CSS
- Login authentication (demo credentials)
- Product detail pages
- Category browsing

## Demo Credentials

- **Email:** test@gmail.com
- **Password:** 123456

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd E-Commerce
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the App

- **Development mode (with hot reload):**

  ```sh
  npm run dev
  ```

  Open [http://localhost:5173](http://localhost:5173) in your browser.

- **Production build:**

  ```sh
  npm run build
  ```

- **Preview production build:**

  ```sh
  npm run preview
  ```

- **Lint the code:**
  ```sh
  npm run lint
  ```

## Project Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── assets/         # Images and SVG components
│   ├── components/     # Reusable UI components (Navbar, Footer, etc.)
│   ├── data/           # Static data (products.js)
│   ├── pages/          # Page components (Home, Cart, Wishlist, etc.)
│   ├── App.jsx         # Main app component with routes
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind CSS import
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Usage Notes

- **Cart and Wishlist** are stored in `localStorage` per browser.
- **Login** is required to access Cart and Wishlist pages.
- **Logout** clears the login session.

## Customization

- To add more products, edit [`src/data/products.js`](src/data/products.js).
- To change categories, edit [`src/components/Categories.jsx`](src/components/Categories.jsx).
- To update branding/images, replace files in [`src/assets/`](src/assets/).

## License

This project is for educational/demo purposes.

---

**Made with [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [Tailwind CSS](https://tailwindcss.com/)**
