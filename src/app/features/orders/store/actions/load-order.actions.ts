import { createAction, props } from '@ngrx/store';
import { Order } from '../../../../shared/models/order.model';

export const loadAll = createAction(
    '[Order API] Order load all',
);

export const loadAllSuccess = createAction(
    '[Order API] Order load all success',
    props<{ orders: Order[] }>(),
);

export const loadAllFailure = createAction(
    '[Order API] Order load all failure',
);
