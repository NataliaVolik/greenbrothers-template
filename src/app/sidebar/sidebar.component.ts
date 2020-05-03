import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
@Input() conf: any;
@Output() hclick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  
  }
  headClick($event){
    this.hclick.emit('я был внутри сайдбара');
  }
}
