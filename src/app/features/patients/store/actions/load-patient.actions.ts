import { createAction, props } from '@ngrx/store';
import { Patient } from '../../../../shared/models/patient.model';

export const loadAll = createAction(
    '[Patient API] Patient load all',
);

export const loadAllSuccess = createAction(
    '[Patient API] Patient load all success',
    props<{ patients: Patient[] }>(),
);

export const loadAllFailure = createAction(
    '[Patient API] Patient load all failure',
);
