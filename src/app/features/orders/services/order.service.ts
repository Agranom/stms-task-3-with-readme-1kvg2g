import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Order } from '../../../shared/models/order.model';

@Injectable({
    providedIn: 'root',
})
export class OrderService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Order[]> {
        const url = 'https://api.mocki.io/v2/79fb05cb';
        return this.http.get<{ order }>(url).pipe(
            map(({ order }) => order),
        );
    }
}
