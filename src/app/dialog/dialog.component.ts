import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  form: FormGroup;
  companions: any[] = [];
  step: number = 1;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
    this.form = this.fb.group({
      typeOfCompanion: ['',],
      searchTraveller: [''],
      firstName: ['', Validators.required],
      middleName: [''],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      seatNumber: ['', Validators.required]
    });
  }

  onStep(step: number): void {
    if (step === 3 && this.form.valid) {
      this.companions.push(this.form.value);
      this.form.reset();
      console.log('Companions:', this.companions); 
    }
    this.step = step + 1;
    this.cd.detectChanges();  
  }

  prevStep(step: number): void {
    this.step = step - 1;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.companions.push(this.form.value);
      console.log('Companions:', this.companions);
      this.form.reset();
      this.step = 4;
      this.cd.detectChanges();  
    }
  }
}
