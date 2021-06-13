import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { FollowListItem } from '../models/follow-list-item.interface';

@Injectable({
    providedIn: 'root',
})
export class FollowListStore {

    constructor(private snackbar: MatSnackBar) {
    }

    private _items = new BehaviorSubject<FollowListItem[]>([]);

    get items(): Observable<FollowListItem[]> {
        return this._items.asObservable();
    }

    private get itemsValue(): FollowListItem[] {
        return this._items.getValue();
    }

    setItem(item: FollowListItem) {
        const isExist = this.itemsValue.find(i => i.id === item.id);
        if (isExist) {
            this.snackbar.open('Item already exists in the list', '', { duration: 3000 });
        } else {
            this._items.next([...this.itemsValue, item]);
            this.snackbar.open('Added', '', { duration: 2000 });
        }
    }

    removeItemById(id: string): void {
        const items = this.itemsValue.filter(i => i.id !== id);
        this._items.next(items);
    }
}
