import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private snack: MatSnackBar,
    private _router: Router
  ) {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  phoneNumberPattern = /^[0-9]{10}$/;

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this.snack.open('Username is required !', 'Ok', {
        duration: 3000,
      });
      return;
    }

    if (!this.phoneNumberPattern.test(this.user.phone)) {
      this.snack.open('Phone number must be 10 digits !!', 'Ok', {
        duration: 3000,
      });
      return;
    }

    const emailDomain = this.user.email.split('@')[1];
    if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailDomain)) {
      this.snack.open('Invalid email domain!', 'Ok', {
        duration: 3000,
      });
      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      this.snack.open('Password is required !', 'Ok', {
        duration: 3000,
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('User Registered Successfully !').then((e) => {
          this._router.navigate(['/']);
        });
      },
      (error) => {
        console.log(error);
        this.snack.open('Username already exists', 'ok', {
          duration: 3000,
        });
      }
    );
  }

  clearFields() {
    this.user.username = '';
    this.user.password = '';
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.email = '';
    this.user.phone = '';
  }
}
