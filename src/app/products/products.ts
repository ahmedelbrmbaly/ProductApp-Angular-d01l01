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
  products: Product[] = [];
  allProducts: Product[] = []; // Store original list for filtering
  categories: Category[] = [];

  filterValues = {
    category: '',
    title: '',
    maxPrice: null as number | null
  };

  displayValues = {
    category: '',
    title: '',
    maxPrice: null as number | null
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Fetch products from service
    this.productService.getProducts().subscribe(response => {
      this.products = response.products;
      this.allProducts = response.products; // Keep original copy for filtering
    });

    // Fetch categories from service
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  updateFilterDisplay(): void {
    this.displayValues = { ...this.filterValues };
  }

  getStockClass(stock: number): string {
    if (stock < 10) return 'low-stock';
    if (stock < 20) return 'medium-stock';
    return 'high-stock';
  }

  filterProducts(): void {
    this.products = this.allProducts.filter((product: Product) => {
      // Filter by category if selected
      if (this.filterValues.category && product.category !== this.filterValues.category) {
        return false;
      }

      // Filter by title if entered
      if (this.filterValues.title && !product.title.toLowerCase().includes(this.filterValues.title.toLowerCase())) {
        return false;
      }

      // Filter by max price if set
      if (this.filterValues.maxPrice && product.price > this.filterValues.maxPrice) {
        return false;
      }

      return true;
    });

    // Update display values
    this.updateFilterDisplay();
  }

  // Add a reset method
  resetFilters(): void {
    this.filterValues = {
      category: '',
      title: '',
      maxPrice: null
    };
    this.products = [...this.allProducts]; // Reset to original product list
    this.updateFilterDisplay();
  }
}
