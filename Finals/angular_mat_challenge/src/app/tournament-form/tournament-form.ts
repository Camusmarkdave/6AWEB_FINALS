import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

// Material Imports
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-tournament-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  templateUrl: './tournament-form.html',
  styleUrl: './tournament-form.css'
})
export class TournamentFormComponent implements OnInit {
  registrationForm!: FormGroup;
  submittedData: any = null;
  
  // Requirement: Accept only users born in 2006 or below
  maxDate: Date = new Date(2006, 11, 31); 

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      
      // Password Requirement: Starts with letter, alphanumeric, min 8 chars
      password: ['', [
        Validators.required, 
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]{7,}$/)
      ]],
      
      // DOB Requirement: Must be 2006 or earlier
      birthDate: ['', [Validators.required, this.dobValidator]],
      
      position: ['', Validators.required]
    });
  }

  // Custom Validator as an extra layer of protection for the year 2006
  dobValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const dob = new Date(control.value);
    if (dob.getFullYear() > 2006) {
      return { invalidYear: true }; // Triggers an error if born after 2006
    }
    return null;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.submittedData = this.registrationForm.value;
      console.log('Registration Successful!', this.submittedData);
      this.registrationForm.reset();
    }
  }
}