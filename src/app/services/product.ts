import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import { ProductResponse } from '../models/response/product-response-module';
import { CategoryResponse } from '../models/response/category-response-module';


@Injectable({
  providedIn: 'root'
})
export class Product {

  // inject HttpClient
  constructor(private http: HttpClient) { }


  // Method to fetch products from https://dummyjson.com/products

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>('https://dummyjson.com/products').pipe(
      catchError((error) => {
        // handle error as needed, e.g., log or transform
        console.error('Error fetching products:', error);
        return throwError(() => error);
      })
    );
  }

    // Method to fetch categories from https://dummyjson.com/products/categories

  getCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>('https://dummyjson.com/products/categories').pipe(
      catchError((error) => {
        console.error('Error fetching categories:', error);
        return throwError(() => error);
      })
    );
  }








}
