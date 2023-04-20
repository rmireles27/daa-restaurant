import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  reservations= [
    { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: '2023.04.30T06:00:00.000Z', reservationSchedule: 7},
    { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: '2023.04.30T06:00:00.000Z', reservationSchedule: 7},
    { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: '2023.04.30T06:00:00.000Z', reservationSchedule: 7},
    { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: '2023.04.30T06:00:00.000Z', reservationSchedule: 7},
    { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: '2023.04.30T06:00:00.000Z', reservationSchedule: 7},
    { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: '2023.04.30T06:00:00.000Z', reservationSchedule: 7},
    { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: '2023.04.30T06:00:00.000Z', reservationSchedule: 7},
    { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: '2023.04.30T06:00:00.000Z', reservationSchedule: 7},
    { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: '2023.04.30T06:00:00.000Z', reservationSchedule: 7},
    { name: 'Roberto Mireles', email: "roberto@gmail.com", phone: '112223334444', people: 1, reservationDate: '2023.04.30T06:00:00.000Z', reservationSchedule: 7},
  ];

  displayedColumns: string[] = [
    'reservationDate',
    'reservationSchedule',
    'people',
    'name',
    'email',
    'phone'
  ];
}
