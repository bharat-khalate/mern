# SJ Jewelers - Project Structure

This document outlines the standard directory structure for the SJ Jewelers React application.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Common components used across the app
│   │   └── index.js    # Exports for common components
│   ├── forms/          # Form components (Login, Signup, etc.)
│   │   └── index.js    # Exports for form components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   │   └── index.js    # Exports for layout components
│   ├── ui/             # Basic UI components (Card, Button, etc.)
│   │   └── index.js    # Exports for UI components
│   └── index.js        # Main component exports
├── pages/              # Page-level components
│   └── index.js        # Exports for page components
├── hooks/              # Custom React hooks
│   └── useAuth.js      # Authentication hook
├── services/           # API calls and external services
│   ├── api.js          # Base API configuration
│   ├── authService.js  # Authentication service
│   └── productService.js # Product-related services
├── utils/              # Utility functions
│   └── helpers.js      # Common helper functions
├── constants/          # Constants and configuration
│   └── config.js       # App configuration and constants
├── styles/             # CSS and styling files
│   ├── App.css
│   ├── index.css
│   ├── input.css
│   └── output.css
└── assets/             # Images, fonts, and other static assets
    ├── child.jpg
    ├── Font.css
    ├── hr.svg
    ├── img1.jpg
    ├── img1.png
    ├── img2.jpg
    ├── jw.jpg
    └── men.jpeg
```

## Component Organization

### Layout Components (`src/components/layout/`)
- **Header.jsx** - Main navigation header
- **Footer.jsx** - Site footer
- **Top_div.jsx** - Top section component
- **Admin_div.jsx** - Admin panel component

### Form Components (`src/components/forms/`)
- **Login.jsx** - User login form
- **Signup.jsx** - User registration form
- **AddCategory.jsx** - Category addition form
- **Uploadproduct.jsx** - Product upload form
- **Update_product.jsx** - Product update form

### UI Components (`src/components/ui/`)
- **Card.jsx** - Product card component
- **Category.jsx** - Category display component
- **Weight.jsx** - Weight display component
- **Hr.css** - Horizontal rule styling

### Page Components (`src/pages/`)
- **AllProducts.jsx** - Products listing page
- **Product.jsx** - Individual product page
- **Cart.jsx** - Shopping cart page
- **Search.jsx** - Search results page
- **ShopByCategory.jsx** - Category-based shopping
- **ShopByGender.jsx** - Gender-based shopping
- **ShopByWeight.jsx** - Weight-based shopping
- **Newallproducts.jsx** - New products listing
- **NewshopByCategory.jsx** - New category-based shopping
- **NewshopByGEnder.jsx** - New gender-based shopping
- **NewshopByWeight.jsx** - New weight-based shopping

## Services

### API Service (`src/services/api.js`)
- Centralized axios configuration
- Request/response interceptors
- Authentication token handling

### Authentication Service (`src/services/authService.js`)
- Login/logout functionality
- Token management
- User session handling

### Product Service (`src/services/productService.js`)
- Product CRUD operations
- Category/gender/weight filtering
- Search functionality

## Hooks

### useAuth (`src/hooks/useAuth.js`)
- Authentication state management
- User context provider
- Login/logout functions

## Utilities

### Helpers (`src/utils/helpers.js`)
- Price formatting
- Date formatting
- Text truncation
- Validation functions
- Debounce/throttle utilities

## Constants

### Configuration (`src/constants/config.js`)
- API endpoints
- Product categories
- Route definitions
- Storage keys

## Benefits of This Structure

1. **Maintainability** - Clear separation of concerns
2. **Scalability** - Easy to add new features
3. **Reusability** - Components can be easily imported
4. **Testing** - Isolated components are easier to test
5. **Team Collaboration** - Clear file organization for team members

## Import Examples

```javascript
// Import components
import { Header, Footer, Card } from '../components';
import { Login, Signup } from '../components/forms';
import { AllProducts, Product } from '../pages';

// Import services
import { authService, productService } from '../services';

// Import utilities
import { formatPrice, validateEmail } from '../utils/helpers';

// Import constants
import { ROUTES, PRODUCT_CATEGORIES } from '../constants/config';

// Import hooks
import { useAuth } from '../hooks/useAuth';
```

## Migration Notes

- All component imports have been updated to use the new structure
- CSS files have been moved to the styles directory
- The original `component` directory has been removed
- New index files provide clean import paths
- Services are now centralized and reusable
