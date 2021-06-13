import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

import { FollowListRoutingModule } from './follow-list-routing.module';
import { FollowListComponent } from './follow-list/follow-list.component';


@NgModule({
    declarations: [FollowListComponent],
    imports: [
        CommonModule,
        FollowListRoutingModule,
        TranslateModule,
        SharedModule,
    ],
})
export class FollowListModule {
}
