import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 @Input() config: any;
 @Output() helloSend = new EventEmitter();
  constructor() { }


  ngOnInit(): void {
  }
  clickMessage(){
    const hello = "Привет";
    this.helloSend.emit(hello);
  }
}
