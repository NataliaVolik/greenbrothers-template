import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  postName: string = 'Posted by: Hege Refsnes';
  contactInfo: string = 'Contact information:';
  linkEmail: string = 'greenbrothers@gmail.com';
  constructor() { }

  ngOnInit(): void {
  }

}
