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
  mensagem: string = ""

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  // salvarDados() {
  //   console.log({ UserModel: this.UserModel })

  //   this.userService.sigin(this.UserModel)
  //     .subscribe(function (response) {
  //       console.log({ response })

  //     })
  // }


  validaLogin(): boolean {
    if (
      this.UserModel.nome === undefined || this.UserModel.nome === '' || 
      this.UserModel.email === undefined || this.UserModel.email === '' ||
      this.UserModel.password === undefined || this.UserModel.password === ''
    ) { 
      return false;
    } else {
      return true;
    }
  }

  //Função de Login
  signin() {
    //fazer validação
    if ( this.validaLogin() ) { 
      console.log(this.UserModel);
      this.userService.sigin(this.UserModel)
        .subscribe(
          {
            next: (response) => {
              console.log(response);
              this.mensagem = `Logado com Sucesso! ${response.status} ${response.statusText}`

            },
            error: (e) => {
              console.log("Não é possível encontrar o usuário ", e);
              this.mensagem = `Não foi possível encontrar o usuário ${e.status} ${e.statusText}`
            }

          }
        )

    } else {

      console.log(this.UserModel);
      this.mensagem = "Preencha este campo corretamente."
    }
  }

}
