import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.css']
})
export class UserGuideComponent implements OnInit {

  pdfSrc: string = '../assets/user manual_pdf';

  constructor() { }

  ngOnInit() {
  }

}
