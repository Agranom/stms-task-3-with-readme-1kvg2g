import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Patient } from '../../../shared/models/patient.model';
import { patientFeatureName } from './feature-name';
import { patientAdapter } from './patient.adapter';
import { PatientState } from './patient.state';

export const patientState = createFeatureSelector(patientFeatureName);

export const { selectAll } = patientAdapter.getSelectors();

export const selectPatientsRaw = createSelector(patientState, selectAll);

export const selectPatients = createSelector(selectPatientsRaw, (orders: Patient[]) => orders.map(o => ({
    id: o.defaultId,
    title: o.fullName,
})));

export const isPatientLoading = createSelector(patientState, (state: PatientState) => state.loading);
