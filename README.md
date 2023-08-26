# E-Commerce Website Frontend : ShopCart

This project, ShopCart, is a frontend implementation of an e-commerce website using React and Chakra UI where data is fetched from Fake Store API.

## Features

- Browse products by category
- View product details
- Add products to cart
- View and update cart
- Proceed to checkout
- Filter products by price range & ratings
- Sort products based on price

## Technologies Used

- React Typescript: JavaScript library for building user interfaces
- Chakra UI: Component library for responsive and accessible UI
- react-router-dom: Routing library for handling navigation
- axios: HTTP client for making API requests
- context-api: For state management
- Icons: react-icons
- Sass: to write minimum CSS
- react-query: for integration of Fake Store APIs in the frontend

## Development Approach

- UI/UX Design: Sketch wireframes and design layouts for each page.

- Component Breakdown: Identify components needed for each page. Break down complex UI into smaller reusable components.

- State Management: Set up a global state management using Context API to manage cart items and other shared states.

- State Update: Implement logic for adding/removing products from the cart using Context API.

- API Integration: Create service files (e.g., productService.ts) to handle API requests. Use Axios for making HTTP requests & react-query hooks for smooth & efficient integration of Fake Store APIs in the frontend.

- Routing: Utilize React Router for managing different routes/pages, such as the homepage, product details, checkout and cart.

- Styling: Use Chakra UI for consistent styling. Customize the theme, create UI components, and apply responsive design.

- Component Development: Develop individual components like ProductCard, FilterModal, and CartProductCard. Focus on modular and reusable design.

- Page Integration: Integrate components into pages liek Homepage, Cart page, Checkout page & Category page to render products of a specific category.

- Deployment: Deploy application using Netlify. https://shopcart-debojit.netlify.app/

## Project Structure

```
src/
|-- assets/
|   |-- banner.jpg
|   |-- empty.jpg
|   |-- logo.webp
|
|-- components/
|   |-- Banner.tsx
|   |-- CartProductCard.tsx
|   |-- CheckoutBox.tsx
|   |-- FilterModal.tsx
|   |-- Navbar.tsx
|   |-- ProductCard.tsx
|
|-- contextApi/
|   |-- appContext.tsx
|   |-- AppState.tsx
|
|-- interfaces/
|   |-- products.ts
|
|-- pages/
|   |-- Cart/
|   |   |-- Cart.tsx
|  |-- CategoryPage/
|   |   |-- CategoryPage.tsx
|   |-- Checkout/
|   |-- components/
|   |--  |-- CheckoutForm.tsx
|   |--  |-- PaymentForm.tsx
|   |   |-- Checkout.tsx
|   |-- Home/
|   |   |-- Home.tsx
|   |-- Product/
|   |   |-- Product.tsx
|   |-- ...
|
|-- styles/
|   |-- components/
|   |   |-- variables.scss
|
|-- utils/
|   |-- Empty.tsx
|   |-- Loader.tsx
|   |-- modifyWord.ts
|
|-- App.css
|-- App.tsx
|-- index.scss
|-- main.tsx
