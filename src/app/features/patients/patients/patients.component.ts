import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { ItemCard } from '../../../shared/models/item-card.model';
import { FollowListStore } from '../../follow-list/services/follow-list-store.service';
import { LoadPatientActions } from '../store/actions';
import { isPatientLoading, selectPatients } from '../store/patient.selectors';

@Component({
    selector: 'st-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent implements OnInit {
    routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
    patients$: Observable<ItemCard[]>;
    isLoading$: Observable<boolean>;

    constructor(private store: Store,
                private followListStore: FollowListStore) {
    }

    ngOnInit() {
        this.patients$ = this.store.pipe(select(selectPatients), shareReplay({ refCount: true, bufferSize: 1 }));
        this.isLoading$ = this.store.pipe(select(isPatientLoading));
    }

    addToFollowList(item: ItemCard): void {
        this.followListStore.setItem(item);
    }

    loadPatients() {
        this.store.dispatch(LoadPatientActions.loadAll());
    }
}
