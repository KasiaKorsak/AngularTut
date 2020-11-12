import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
            errorMsg = `An error occurred : ${error.error.message}`;
        } else {
            errorMsg = `Server return code: ${error.status}, error messsage is: ${error.message}`;
        }
        console.error(errorMsg);
        return throwError(errorMsg);
    }
}