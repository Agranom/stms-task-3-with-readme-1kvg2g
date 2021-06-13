import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowListComponent } from './follow-list/follow-list.component';

const routes: Routes = [
    { path: '', component: FollowListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FollowListRoutingModule {
}
