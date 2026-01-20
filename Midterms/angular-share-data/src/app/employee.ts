import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return [
      { id: 101, firstname: 'Eleven', lastname: 'Hopper', email: 'el@hawkins.lab' },
      { id: 102, firstname: 'Mike', lastname: 'Wheeler', email: 'mike@hawkins.high' },
      { id: 103, firstname: 'Dustin', lastname: 'Henderson', email: 'dustin@cerebro.net' },
      { id: 104, firstname: 'Steve', lastname: 'Harrington', email: 'steve@scoops.ahoy' },
      { id: 105, firstname: 'Mark Dave', lastname: 'Camus', email: 'mdcamus@hau.edu.ph' }
    ];
  }
}