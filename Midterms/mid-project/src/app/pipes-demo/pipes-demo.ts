import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, AsyncPipe, DecimalPipe } from '@angular/common'; // Import the missing pipes
import { interval } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-pipes-demo',
  standalone: true, // Ensure standalone is true for Angular 17+
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, AsyncPipe, DecimalPipe], // Add them to the imports array
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
}
