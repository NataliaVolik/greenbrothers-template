import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() navconf: any;
  @Input() cat: any;
  nav: Array<any> = [
    { name: 'Главная'},
    { name: 'О компании'},
    { name: 'Портфолио'},
    { name: 'Контакты'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
