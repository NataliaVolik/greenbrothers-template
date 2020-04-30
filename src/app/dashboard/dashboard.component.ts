import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
@Input() config : any;
@Input() rabbit: any;
@Input() fruits: any;
@Input() motor: any;
@Input() color: string;
  
  constructor() { }
  ngOnInit(): void {
    console.log(this.config);
  }

}
