import { Component, OnInit } from '@angular/core';
import { faUser, faArrowLeft, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registar',
  templateUrl:'./registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;

  constructor() { }

  ngOnInit(): void {
  }

}
