import { Component } from '@angular/core';
import { Product, products, categories } from './product-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  standalone: false
})
export class Products {
  products: Product[] = products;
  categories: string[] = categories;

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

  updateFilterDisplay(): void {
    this.displayValues = { ...this.filterValues };
  }

  getStockClass(stock: number): string {
    if (stock < 10) return 'low-stock';
    if (stock < 20) return 'medium-stock';
    return 'high-stock';
  }

 filterProducts(): void {
   this.products = products.filter(product => {
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
   this.products = products; // Reset to original product list
   this.updateFilterDisplay();
 }

}
