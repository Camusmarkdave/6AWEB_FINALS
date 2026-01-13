import { Component } from '@angular/core';
import {
  DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe,
  SlicePipe, AsyncPipe, DecimalPipe,
  PercentPipe, TitleCasePipe, JsonPipe // Added these 3 pipes
} from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe,
    SlicePipe, AsyncPipe, DecimalPipe,
    PercentPipe, TitleCasePipe, JsonPipe // Included in imports
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();
  price = 20000;
  time$ = interval(1000).pipe(map(val => new Date()));
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  // New variables for the added pipes
  completionRate: number = 0.85; // For PercentPipe
  studentName: string = 'mark dave camus'; // For TitleCasePipe
  userObject = { id: 1, name: 'Mark', role: 'Student' }; // For JsonPipe
}
