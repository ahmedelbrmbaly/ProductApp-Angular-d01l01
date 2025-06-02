# ProductApp - Angular Lab Project

## Overview
This project is an Angular application called ProductApp that demonstrates fundamental Angular concepts including components, data binding, structural directives, and form handling. The application displays a list of products with filtering capabilities and follows a clean component-based architecture.

## Project Structure

### Components
1. **Navbar** - Top navigation bar with app branding and menu links
2. **Products** - Main content area featuring:
  - Product filtering form
  - Current filter values display
  - Product cards with images and details
3. **Footer** - Bottom section with quick links and copyright information

### Features Implemented
- ✅ Angular project setup with proper component structure
- ✅ Dynamic product count display
- ✅ Filter form with category, title, and price inputs
- ✅ Real-time display of filter values
- ✅ Product filtering functionality
- ✅ Responsive product grid with hover effects
- ✅ Stock level indicators with color coding
- ✅ Bootstrap styling for all components

## Technical Specifications

### Data Model
The application uses a predefined array of product objects with the following structure:
```typescript
interface Product {
  id: number;
  title: string;
  stock: number;
  category: string;
  price: number;
  image: string;
}
```

### Filtering Logic
The product filtering system supports:
- Category selection (dropdown)
- Title search (text match)
- Maximum price limit
- Combined filter criteria
- Reset functionality to clear all filters

### Styling
- Bootstrap 5 for layout and components
- Custom CSS for:
  - Product card hover effects
  - Image containers and transitions
  - Stock level color coding
  - Responsive design adjustments

## Development Tasks Completed

### Core Requirements
1. Created Angular project named `ProductApp`
2. Generated three components:
  - Navbar
  - Products
  - Footer
3. Implemented page layout structure:
  - Navbar at the top
  - Products section in the middle
  - Footer at the bottom
4. Products component:
  - Created product array with required fields
  - Displayed total product count using data binding
5. Added product filtering form:
  - Category select dropdown
  - Title text input
  - Price number input
  - Real-time display of filter values

### Bonus Tasks Implemented
- Dynamically displayed product list using `*ngFor`
- Integrated Bootstrap for styling all components
- Added interactive elements (hover effects, transitions)
- Implemented stock level indicators
- Added product images with placeholder handling

## How to Run the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   ng serve
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:4200/
   ```

## Usage Instructions

1. **Filtering Products**:
  - Use the filter form to narrow down products by:
    - Category (select from dropdown)
    - Title (enter partial name)
    - Maximum price (enter dollar amount)
  - Click "Apply" to filter or "Reset" to clear all filters

2. **Viewing Products**:
  - Products are displayed in a responsive grid
  - Hover over cards for visual effects
  - Stock levels are color-coded:
    - Red: Low stock (<10 units)
    - Amber: Medium stock (10-19 units)
    - Green: High stock (20+ units)

## Dependencies

- Angular
- Bootstrap 5
- Font Awesome (for social icons in footer)

