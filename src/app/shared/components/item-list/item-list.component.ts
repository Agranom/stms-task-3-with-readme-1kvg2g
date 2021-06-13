import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemCard } from '../../models/item-card.model';

@Component({
    selector: 'st-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent {
    @Input() items: ItemCard[];
    @Input() isRemovable: boolean;
    @Output() addToFollowClicked = new EventEmitter<ItemCard>();
    @Output() removeClicked = new EventEmitter<ItemCard>();

    addToFollowList(item: ItemCard): void {
        this.addToFollowClicked.emit(item);
    }

    removeItem(item: ItemCard): void {
        this.removeClicked.emit(item);
    }
}
