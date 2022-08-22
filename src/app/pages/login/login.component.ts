import { Component, OnInit } from '@angular/core';
import { faUser, faArrowLeft, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  faArrowLeft = faArrowLeft;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  UserModel = new User();
  mensagem: string = ""

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }



  //  function validar email 
  validateEmail(email: string | undefined): boolean {
    const validarEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validarEmail.test(String(email).toLowerCase());
  }

  // function validar ataques SQL Injection
  vadidatePalavrasProibidas(email: string | undefined): boolean {
    const palavrasProibidas = ["select", "105", "or", "1 = 1", "=", "where", "delete", "insert", "create", "table"];


    if (!email) {
      return false;
    }
    //  procura palavra proibida e bloquia a primeira lavra que encontra 
    const searchPalavraProibida = (palavra: string) => email.toLowerCase().search(palavra) > -1
    const encontrada = palavrasProibidas.find(searchPalavraProibida)
    console.log("Palavra proibida encontrada:", encontrada)
    return !encontrada
  }


  validaLogin(user: User): boolean {

    //validar campos 
    if (
      !user.nome ||
      !user.email ||
      !user.password
    ) {
      console.error('falta dados do usuario: ', { user });
      return false;
    }

    if (!this.vadidatePalavrasProibidas(user.email)) {
      console.error('email com palavras proibidas: ', this.UserModel);
      return false;
    }

    if (!this.validateEmail(user.email)) {
      console.error('email invalido: ', this.UserModel);
      return false;
    }

    return true;

  }


  //fazer validação login e logar com API
  signin() {
    if (!this.validaLogin(this.UserModel)) {
      console.log(this.UserModel);
      this.mensagem = "preencher corretamente todos os campos."
      return;
    }

    this.userService.sigin(this.UserModel)
      .subscribe(
        {
          next: (response) => {
            console.log(response);
            this.mensagem = `Logado com Sucesso! ${response.status} ${response.statusText}`
            this.router.navigate(['']);

          },
          error: (e) => {
            console.error('Usuário não encontrado', e);
            this.mensagem = `${e.error} ${e.status} ${e.statusText}`
          }

        }
      )

  }

}