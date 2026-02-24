// src/app/template-demo/template-demo.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.css']
})
export class TemplateDemo {
  roles = ['Admin', 'User', 'Guest'];
  submittedData: any = null;
  
  user = {
    username: '',
    email: '',
    password: '',
    role: '',
    gender: '',
    civilStatus: '',
    comments: ''
  };

  onSubmit(form: any) {
    this.submittedData = { ...this.user };
    form.resetForm();
  }
}