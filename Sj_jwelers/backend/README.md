# SJ Jewelers Backend

A MERN stack backend application for SJ Jewelers with organized file structure.

## File Structure

```
backend/
├── config/
│   └── database.js          # Database connection configuration
├── middleware/
│   ├── cors.js              # CORS configuration
│   ├── session.js           # Session configuration
│   └── upload.js            # Multer file upload configuration
├── routes/
│   ├── productRoutes.js     # Product-related endpoints
│   ├── userRoutes.js        # User authentication endpoints
│   ├── cartRoutes.js        # Shopping cart endpoints
│   └── categoryRoutes.js    # Category and filtering endpoints
├── uploads/                 # Directory for uploaded files
├── server.js               # Main server file (renamed from index.js)
├── index.js                # Original file (keep for reference)
└── README.md               # This file
```

## API Endpoints

### Products (`/api/products`)
- `GET /fetch` - Get all products
- `GET /fetch/product/:id` - Get product by ID
- `POST /fetchh/product/:id` - Get product with cart status
- `POST /upload` - Add new product (with image upload)
- `PUT /update_product/:id` - Update product (with image upload)
- `PUT /update_product_stock/:id` - Update product stock
- `DELETE /del/:id` - Delete product
- `POST /search/:s_id` - Search products by name

### Users (`/api/users`)
- `GET /` - Check session status
- `POST /fetch_user` - User login
- `POST /reg` - User registration
- `GET /logot` - User logout

### Cart (`/api/cart`)
- `POST /add_to_cart` - Add item to cart
- `POST /fetch_cart/:uid` - Get cart items for user
- `DELETE /del_cart/:id` - Remove item from cart

### Categories (`/api/categories`)
- `POST /createcategory` - Create new category (with image upload)
- `GET /fetchcat` - Get all categories
- `GET /fetchcatdata/:name` - Get products by category
- `GET /fetchweight` - Get distinct weights
- `GET /fetchwtdata/:weight` - Get products by weight

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Make sure MySQL is running and the `sj_jwelers` database exists

3. Update database configuration in `config/database.js` if needed

4. Start the server:
   ```bash
   node server.js
   ```

## Environment Variables

The application uses the following default configurations:
- Port: 5000
- Database: MySQL (localhost, root user)
- CORS Origin: http://localhost:3000

## Notes

- The original `index.js` file has been preserved for reference
- All routes now use the `/api` prefix for better organization
- File uploads are handled by multer and stored in the `uploads/` directory
- Session management is configured for user authentication
- CORS is configured to allow credentials for cross-origin requests
