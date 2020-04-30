import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
@Input() fox : any;
@Input() fox2 : any;
@Input() animals: any;
@Input() koleso: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.fox)
  }

}
