import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user = null;
  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.user = this.login.getUser();
  }

}
