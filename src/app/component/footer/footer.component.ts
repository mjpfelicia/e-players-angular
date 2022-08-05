import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).on('ready', function () {

    })

    $('#verificar-email').on('click', function (e) {

      console.log("hhhhhhh")
      const email = $("#email-footer").val() as string;
      const validEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

      if (validEmail.test(email)) {
        $("#erro").show().addClass("ok").removeClass("erro")
          .text('E-mail enviado com sucesso.');
      } else {
        $("#erro").show().removeClass("ok").addClass("erro")
          .text('Por favor, informe um email válido.');
        console.log("aaaaaa")
      }




    })

  }


}
