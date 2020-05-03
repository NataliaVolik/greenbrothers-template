import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() conf: any;
  @Output() headClickEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  headerClick(){
    this.headClickEvent.emit();
  }
}
