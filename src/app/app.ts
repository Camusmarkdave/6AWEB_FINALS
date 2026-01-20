import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common'; 
import { EmployeeService } from './employee'; 
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DecimalPipe], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  public employees: any[] = [];
  public products: any[] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _productService: ProductService 
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }
}