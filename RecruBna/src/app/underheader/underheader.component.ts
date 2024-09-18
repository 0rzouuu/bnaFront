import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-underheader',
  templateUrl: './underheader.component.html',
  styleUrls: ['./underheader.component.css']
})
export class UnderheaderComponent implements OnInit {
  imgUrl = '../assets/resources/hiring.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
