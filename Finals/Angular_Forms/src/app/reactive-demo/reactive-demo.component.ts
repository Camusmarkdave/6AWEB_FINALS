// src/app/reactive-demo/reactive-demo.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-demo.component.html',
  styleUrl: './reactive-demo.component.css'
})
export class ReactiveDemo {
  roles = ['Admin', 'User', 'Guest'];
  form: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['', Validators.required],
      gender: ['', Validators.required],
      civilStatus: ['', Validators.required],
      comments: ['']
    });
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  onSubmit() {
    if (this.form.valid) {
      this.submittedData = this.form.value;
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}