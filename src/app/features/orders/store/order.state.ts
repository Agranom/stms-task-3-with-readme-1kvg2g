import { EntityState } from '@ngrx/entity';
import { Order } from '../../../shared/models/order.model';
import { orderAdapter } from './order.adapter';

export interface OrderState extends EntityState<Order> {
    loading: boolean;
}

export const orderInitialState = orderAdapter.getInitialState({
    loading: false,
});
