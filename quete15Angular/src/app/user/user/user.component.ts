import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { passwordValidator } from './../../password-validator';
import { Component, OnInit } from '@angular/core';
import { emailValidator } from 'src/app/email-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user;

  userForm = this.fb.group({
    credentials: this.fb.group({
        email: ['', [Validators.required, Validators.email, emailValidator]],
        mdp: ['', [Validators.required, passwordValidator]]
    })
});


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm.value);
    }

}
