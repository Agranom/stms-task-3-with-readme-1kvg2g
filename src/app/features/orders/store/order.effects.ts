import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAction } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Order } from '../../../shared/models/order.model';
import { OrderService } from '../services/order.service';
import { LoadOrderActions } from './actions';

@Injectable()
export class OrderEffects {

    loadAll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadOrderActions.loadAll),
            switchMap(() => this.orderService.getAll().pipe(
                map((orders: Order[]) => LoadOrderActions.loadAllSuccess({ orders })),
                catchError(() => of(LoadOrderActions.loadAllFailure())),
            )),
        ),
    );

    constructor(private orderService: OrderService,
                private actions$: Actions) {
    }
}
