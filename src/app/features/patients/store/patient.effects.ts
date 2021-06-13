import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Patient } from '../../../shared/models/patient.model';
import { PatientService } from '../services/patient.service';
import { LoadPatientActions } from './actions';

@Injectable()
export class PatientEffects {

    loadAll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadPatientActions.loadAll),
            switchMap(() => this.patientService.getAll().pipe(
                map((patients: Patient[]) => LoadPatientActions.loadAllSuccess({ patients })),
                catchError(() => of(LoadPatientActions.loadAllFailure())),
            )),
        ),
    );

    constructor(private patientService: PatientService,
                private actions$: Actions) {
    }
}
