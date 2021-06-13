import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order } from '../../../shared/models/order.model';
import { orderFeatureName } from './feature-name';
import { orderAdapter } from './order.adapter';
import { OrderState } from './order.state';

export const orderState = createFeatureSelector(orderFeatureName);

export const { selectAll } = orderAdapter.getSelectors();

export const selectOrdersRaw = createSelector(orderState, selectAll);

export const selectOrders = createSelector(selectOrdersRaw, (orders: Order[]) => orders.map(o => ({
    id: o.identifier,
    title: o.orderName,
})));

export const isOrdersLoading = createSelector(orderState, (state: OrderState) => state.loading);
