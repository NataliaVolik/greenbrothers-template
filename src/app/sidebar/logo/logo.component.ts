import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
@Input() lolipop: any;
@Input() dog: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.lolipop);
  }

}
