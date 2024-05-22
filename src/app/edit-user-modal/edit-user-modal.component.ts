import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-user-modal',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, CommonModule],
  templateUrl: './edit-user-modal.component.html',
  styleUrl: './edit-user-modal.component.scss'
})
export class EditUserModalComponent {
  public userForm: FormGroup;
  public userFormValue: any;

  constructor(public dialogRef: MatDialogRef<EditUserModalComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initUserForm();
  }
  public initUserForm() {
    this.userForm = this.formBuilder.group({
      id: [this.userFormValue ? this.userFormValue.id : null],
      name: [this.userFormValue ? this.userFormValue.name : null, [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email: [{ value: this.userFormValue ? this.userFormValue.email : null, disabled: true }],
      address: [this.userFormValue ? this.userFormValue.address : null, Validators.pattern(/^[a-zA-Z0-9"'\s,\-.]+$/g
)],
    });
  }
}
