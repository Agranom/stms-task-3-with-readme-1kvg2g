import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { ItemCard } from '../../../shared/models/item-card.model';
import { FollowListStore } from '../../follow-list/services/follow-list-store.service';
import { LoadOrderActions } from '../store/actions';
import { isOrdersLoading, selectOrders } from '../store/order.selectors';

@Component({
    selector: 'st-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
    routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
    orders$: Observable<ItemCard[]>;
    isLoading$: Observable<boolean>;

    constructor(private store: Store,
                private followListStore: FollowListStore) {
    }

    ngOnInit() {
        this.orders$ = this.store.pipe(select(selectOrders), shareReplay({ refCount: true, bufferSize: 1 }));
        this.isLoading$ = this.store.pipe(select(isOrdersLoading));
    }

    loadOrders(): void {
        this.store.dispatch(LoadOrderActions.loadAll());
    }

    addToFollowList(item: ItemCard): void {
        this.followListStore.setItem(item);
    }
}
