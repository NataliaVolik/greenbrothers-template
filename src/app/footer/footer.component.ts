import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() fruits : any;
  @Input() motor: any;
  postName: string = 'Posted by: Hege Refsnes';
  contactInfo: string = 'Contact information:';
  linkEmail: string = 'greenbrothers@gmail.com';
  constructor() { }

  ngOnInit(): void {
  }

}
