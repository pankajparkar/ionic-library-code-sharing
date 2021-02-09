import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ionic-library-code-sharing-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() rootPage;

  constructor() { }

  ngOnInit(): void {
  }

}
