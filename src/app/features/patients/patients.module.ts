import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { patientFeatureName } from './store/feature-name';
import { PatientEffects } from './store/patient.effects';
import { patientReducer } from './store/patient.reducer';

@NgModule({
    declarations: [PatientsComponent],
    imports: [
        CommonModule,
        SharedModule,
        PatientsRoutingModule,
        StoreModule.forFeature(patientFeatureName, patientReducer),
        EffectsModule.forFeature([PatientEffects]),
    ],
    providers: [],
})
export class PatientsModule {
}
