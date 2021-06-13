import { createReducer, on } from '@ngrx/store';
import { LoadOrderActions } from './actions';
import { orderAdapter } from './order.adapter';
import { orderInitialState, OrderState } from './order.state';

export const orderReducer = createReducer<OrderState>(
    orderInitialState,
    on(LoadOrderActions.loadAll, (state) => ({ ...state, loading: true })),
    on(LoadOrderActions.loadAllSuccess, (state, { orders }) => orderAdapter.setAll(orders, {
        ...state,
        loading: false,
    })),
    on(LoadOrderActions.loadAllFailure, (state) => ({ ...state, loading: false })),
);
