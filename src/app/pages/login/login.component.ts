import { Component, OnInit } from '@angular/core';
import { faUser, faArrowLeft, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  UserModel = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  salvarDados() {
    console.log(this.UserModel)
    this.userService.sigin(this.UserModel).subscribe(function(response){
      console.log(response)

    })
  }

}
