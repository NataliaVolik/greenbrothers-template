import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() wolf : any;
  @Input() color: string;
  pageHeading: string = 'О компании';
  constructor() { }

  ngOnInit(): void {
    console.log(this.wolf);
    console.log(this.wolf.children[1])
  }

}
