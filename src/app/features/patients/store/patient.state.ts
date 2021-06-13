import { EntityState } from '@ngrx/entity';
import { Patient } from '../../../shared/models/patient.model';
import { patientAdapter } from './patient.adapter';

export interface PatientState extends EntityState<Patient> {
    loading: boolean;
}

export const patientInitialState = patientAdapter.getInitialState({
    loading: false,
});
