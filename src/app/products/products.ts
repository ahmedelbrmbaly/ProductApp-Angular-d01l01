import { Component, OnInit } from '@angular/core';
      import { Product as ProductService } from '../services/product';
      import { Product } from '../models/response/product-response-module';
      import { Category } from '../models/response/category-response-module';

      @Component({
        selector: 'app-products',
        templateUrl: './products.html',
        styleUrls: ['./products.css'],
        standalone: false
      })
      export class Products implements OnInit {
        // List of products currently displayed (after filtering)
        products: Product[] = [];
        // Full list of products (used to reset or re-filter)
        allProducts: Product[] = [];
        // List of categories for the dropdown filter
        categories: Category[] = [];

        // Stores the current filter values selected by the user
        filterValues = {
          category: '',
          title: '',
          maxPrice: null as number | null
        };

        // Stores the values currently displayed in the "Current Filter Values" card
        displayValues = {
          category: '',
          title: '',
          maxPrice: null as number | null
        };

        constructor(private productService: ProductService) {}

        ngOnInit(): void {
          // Fetch all products from the service when the component loads
          this.productService.getProducts().subscribe(response => {
            this.products = response.products;
            this.allProducts = response.products; // Save original list for filtering
          });

          // Fetch all categories for the filter dropdown
          this.productService.getCategories().subscribe(categories => {
            this.categories = categories;
          });
        }

        // Update the display values whenever a filter changes
        updateFilterDisplay(): void {
          this.displayValues = { ...this.filterValues };
        }

        // Returns a CSS class based on the stock level for visual feedback
        getStockClass(stock: number): string {
          if (stock < 10) return 'low-stock';
          if (stock < 20) return 'medium-stock';
          return 'high-stock';
        }

        // Filters the product list based on selected filter values
        filterProducts(): void {
          this.products = this.allProducts.filter((product: Product) => {
            // Filter by category (if selected)
            if (this.filterValues.category && product.category !== this.filterValues.category) {
              return false;
            }
            // Filter by product title (if entered)
            if (this.filterValues.title && !product.title.toLowerCase().includes(this.filterValues.title.toLowerCase())) {
              return false;
            }
            // Filter by maximum price (if set)
            if (this.filterValues.maxPrice && product.price > this.filterValues.maxPrice) {
              return false;
            }
            return true;
          });

          // Update the display card with the current filter values
          this.updateFilterDisplay();
        }

        // Resets all filters and shows the full product list
        resetFilters(): void {
          this.filterValues = {
            category: '',
            title: '',
            maxPrice: null
          };
          this.products = [...this.allProducts]; // Restore original product list
          this.updateFilterDisplay();
        }
      }
