import { createEntityAdapter } from '@ngrx/entity';
import { Patient } from '../../../shared/models/patient.model';

export const patientAdapter = createEntityAdapter<Patient>({
    selectId: (order: Patient) => order.defaultId,
});
