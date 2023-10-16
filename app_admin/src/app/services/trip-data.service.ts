import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Trip } from '../models/trip';

@Injectable()
export class TripDataService {

    private apiBaseUrl = 'http://localhost:3000/api/';
    private tripUrl = '${this.apiBaseUrl}trips/';

    constructor(private http: Http) {}

    public getTrip(tripCode: string): Promise<Trip> {
        console.log(`Inside TripDataService#getTrip(${tripCode})`);
        return this.http
            .get(this.tripUrl + tripCode)
            .toPromise()
            .then(response => response.json() as Trip)
            .catch(this.handleError);
    }

    public addTrip(formData: Trip): Promise<Trip> {
        console.log('Inside TripDataService#addTrip');
        return this.http
            .post(this.tripUrl, formData) 
            .toPromise()
            .then(response => response.json() as Trip[])
            .catch(this.handleError);
    }

    public updateTrip(formData: Trip): Promise<Trip> {
        console.log('Inside TripDataService#updateTrip');
        console.log(formData);
        return this.http
            .put(this.tripUrl + formData.code, formData)
            .toPromise()
            .then(response => response.json() as Trip[])
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('Something has gone wrong', error); 
        return Promise.reject(error.message || error);
    }
}