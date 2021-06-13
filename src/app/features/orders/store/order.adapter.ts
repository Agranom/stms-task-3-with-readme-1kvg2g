import { createEntityAdapter } from '@ngrx/entity';
import { Order } from '../../../shared/models/order.model';

export const orderAdapter = createEntityAdapter<Order>({
    selectId: (order: Order) => order.identifier,
});
