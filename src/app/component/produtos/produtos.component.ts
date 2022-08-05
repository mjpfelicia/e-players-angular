import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function () {

      $(".btn-liga").click(function () {
        alert("Este produto não está disponível");
      });

    });
  }




}
