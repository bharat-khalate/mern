// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  TIMEOUT: 10000,
};

// App Configuration
export const APP_CONFIG = {
  NAME: 'SJ Jewelers',
  VERSION: '1.0.0',
  DESCRIPTION: 'Premium Jewelry Store',
};

// Product Categories
export const PRODUCT_CATEGORIES = [
  'Rings',
  'Necklaces',
  'Earrings',
  'Bracelets',
  'Watches',
  'Pendants',
  'Chains',
  'Anklets'
];

// Product Genders
export const PRODUCT_GENDERS = [
  'Men',
  'Women',
  'Unisex',
  'Kids'
];

// Product Weights
export const PRODUCT_WEIGHTS = [
  'Light (0-5g)',
  'Medium (5-15g)',
  'Heavy (15g+)'
];

// Routes
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT: '/product/:id',
  CART: '/cart',
  LOGIN: '/login',
  SIGNUP: '/signup',
  ADMIN: '/admin',
  SEARCH: '/search',
  CATEGORY: '/category/:category',
  GENDER: '/gender/:gender',
  WEIGHT: '/weight/:weight'
};

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  CART: 'cart',
  THEME: 'theme'
};
