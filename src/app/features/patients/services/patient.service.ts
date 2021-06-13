import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from '../../../shared/models/patient.model';

@Injectable({
    providedIn: 'root',
})
export class PatientService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Patient[]> {
        const url = 'https://api.mocki.io/v2/51597ef3';
        return this.http.get<{ patient }>(url).pipe(
            map(({ patient }) => patient),
        );
    }
}
