import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reserved-right',
  templateUrl: './reserved-right.component.html',
  styleUrls: ['./reserved-right.component.scss']
})
export class ReservedRightComponent implements OnInit {
@Input() conf: any;
  constructor() { }

  ngOnInit(): void {
  }

}
