import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
@Input() config : any;
@Input() rabbit: any;
@Output() valChang = new EventEmitter();
firstTab : boolean = false;
secondTab : boolean = false;
thirdTab : boolean = false;
fourTab : boolean = false;
fiveTab : boolean = false;

  
  constructor() { }
  ngOnInit(): void {
    
  }
  headerUpdate(val){
    console.log('header', val);
    this.valChang.emit(val);
  }
  valtEventFunc(getValt){
    console.log(getValt);
  }
  helloSendWork(helloS){
    alert(helloS);
  }
  eventFirst(){
    this.firstTab = true;
    this.secondTab = false;
    this.thirdTab = false;
    this.fourTab = false;
    this.fiveTab = false;

    console.log('я первая вкладка');
  }
  eventSecond(){
    this.firstTab = false;
    this.secondTab = true;
    this.thirdTab = false;
    this.fourTab = false;
    this.fiveTab = false;

    console.log('я вторая вкладка')
  }
  eventThird(){
    this.firstTab = false;
    this.secondTab = false;
    this.thirdTab = true;
    this.fourTab = false;
    this.fiveTab = false;
    console.log('я третья вкладка')
  }
  eventFour(event){
    this.firstTab = false;
    this.secondTab = false;
    this.thirdTab = false;
    this.fourTab = true;
    this.fiveTab = false;
    //this.fourTab = event;
    console.log(event);
  }
  eventFive(event){
    this.firstTab = false;
    this.secondTab = false;
    this.thirdTab = false;
    this.fourTab = false;
    this.fiveTab = true;
    //this.fiveTab = true;
    console.log(event);
  }
}
