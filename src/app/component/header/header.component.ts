import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() header: string = '';



  constructor() { }
// percore os link e chama a function abrefechamenu
  ngOnInit(): void {
    let linksMenu = document.querySelectorAll("#menu a");
    let self = this;

    linksMenu.forEach(function (link) {

      link.addEventListener("click", function (e) {
        self.abreFechaMenu();
      })

    })

  }

  // abre e fecha menu
  abreFechaMenu() {
    let navbar = document.querySelector("#menu");

    if (navbar) {
      navbar.classList.toggle("mostraEscondeMenu");
    }

  }


}
