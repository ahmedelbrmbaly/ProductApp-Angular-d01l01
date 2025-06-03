import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ProductResponse } from '../models/response/product-response-module';
import { CategoryResponse } from '../models/response/category-response-module';

@Injectable({
  providedIn: 'root' // This service is available app-wide
})
export class Product {

  // Injects Angular's HttpClient for making HTTP requests
  constructor(private http: HttpClient) { }

  // Fetches the list of products from the API
  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>('https://dummyjson.com/products').pipe(
      catchError((error) => {
        // Logs any errors to the console and rethrows them
        console.error('Error fetching products:', error);
        return throwError(() => error);
      })
    );
  }

  // Fetches the list of categories from the API
  getCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>('https://dummyjson.com/products/categories').pipe(
      catchError((error) => {
        // Logs any errors to the console and rethrows them
        console.error('Error fetching categories:', error);
        return throwError(() => error);
      })
    );
  }
}
