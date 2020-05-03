import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() config : any;
@Output() valueChange = new EventEmitter();
@Output() valtEvent = new EventEmitter();
@Output() firstEvent = new EventEmitter();
@Output() secondEvent = new EventEmitter();
@Output() thirdButton = new EventEmitter();
@Output() fourButton = new EventEmitter();
@Output() fiveEvent = new EventEmitter();
status : boolean = false;
  value: any = 1;

constructor() { }

  ngOnInit(): void {
    
  }
  onClick(val: any){
    console.log(val);
    this.value = val;
    this.valueChange.emit(val);
  }
  initClick(valt){
    this.valtEvent.emit(valt);
    
  }
  clickFirstButton(){
    this.firstEvent.emit();
    
  }
  clickSecondButton(){
    this.secondEvent.emit();
  }
  clickThirdButton(){
    this.thirdButton.emit();
  }
  clickFourButton(){
    this.status = !this.status;
    this.fourButton.emit(this.status);
  }
  clickFiveButton(){
    this.fiveEvent.emit('hello world');
  }
}
