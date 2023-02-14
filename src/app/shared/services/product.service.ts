import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http'
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:8080/fabricante-back"

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    console.log(msg)
    this.snackBar.open(msg, '', {
      duration: 4000,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: isError ? ["redSnackBar"] : ["greenSnackBar"]
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}/product`, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/product`, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/product/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/product/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ops moioooo, deu xabum!', true)
    return EMPTY
  }
}
