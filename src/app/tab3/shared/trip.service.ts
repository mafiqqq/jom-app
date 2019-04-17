import { Injectable } from '@angular/core';
import { Trip } from './trip.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  formData: Trip;
  constructor(private firestore: AngularFirestore) { }
}
