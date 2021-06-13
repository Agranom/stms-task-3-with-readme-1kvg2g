import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';

import { OrdersComponent } from './orders/orders.component';
import { orderFeatureName } from './store/feature-name';
import { OrderEffects } from './store/order.effects';
import { orderReducer } from './store/order.reducer';

@NgModule({
    declarations: [OrdersComponent],
    imports: [
        CommonModule,
        SharedModule,
        OrdersRoutingModule,
        StoreModule.forFeature(orderFeatureName, orderReducer),
        EffectsModule.forFeature([OrderEffects])
    ],
})
export class OrdersModule {
}
