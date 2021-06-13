import { createReducer, on } from '@ngrx/store';
import { LoadPatientActions } from './actions';
import { patientAdapter } from './patient.adapter';
import { patientInitialState, PatientState } from './patient.state';

export const patientReducer = createReducer<PatientState>(
    patientInitialState,
    on(LoadPatientActions.loadAll, (state) => ({ ...state, loading: true })),
    on(LoadPatientActions.loadAllSuccess, (state, { patients }) => patientAdapter.setAll(patients, {
        ...state,
        loading: false,
    })),
    on(LoadPatientActions.loadAllFailure, (state) => ({ ...state, loading: false })),
);
