import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemCard } from '../../../shared/models/item-card.model';
import { FollowListItem } from '../models/follow-list-item.interface';
import { FollowListStore } from '../services/follow-list-store.service';

@Component({
    selector: 'st-follow-list',
    templateUrl: './follow-list.component.html',
    styleUrls: ['./follow-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FollowListComponent implements OnInit, OnDestroy {
    filteredItems: FollowListItem[] = [];

    private items: FollowListItem[] = [];
    private destroy$ = new Subject();

    constructor(private followListStore: FollowListStore) {
    }

    ngOnInit(): void {
        this.followListStore.items.subscribe(this.initItems.bind(this));
    }

    removeItem(item: ItemCard): void {
        this.followListStore.removeItemById(item.id);
    }

    filterItems(value: string) {
        this.filteredItems = this.items.filter(i => i.title.toLowerCase().includes(value.toLowerCase()));
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private initItems(items: FollowListItem[]): void {
        this.items = items;
        this.filteredItems = items;
    }
}
