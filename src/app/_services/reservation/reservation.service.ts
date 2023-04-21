import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/_models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
    private reservations: Reservation[] = [
      { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: new Date('2023-04-30T06:00:00.000Z'), reservationSchedule: 7},
      { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: new Date('2023-04-30T06:00:00.000Z'), reservationSchedule: 7},
      { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: new Date('2023-04-30T06:00:00.000Z'), reservationSchedule: 7},
      { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: new Date('2023-04-30T06:00:00.000Z'), reservationSchedule: 7},
      { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: new Date('2023-04-30T06:00:00.000Z'), reservationSchedule: 7},
      { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: new Date('2023-04-30T06:00:00.000Z'), reservationSchedule: 7},
      { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: new Date('2023-04-30T06:00:00.000Z'), reservationSchedule: 7},
      { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: new Date('2023-04-30T06:00:00.000Z'), reservationSchedule: 7},
      { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: new Date('2023-04-30T06:00:00.000Z'), reservationSchedule: 7},
      { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: new Date('2023-04-30T06:00:00.000Z'), reservationSchedule: 7},
    ];

  constructor() { }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  deleteRservation() {
    alert('Boton de borrar activado.');
  }
}
