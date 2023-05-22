import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
obj:any={id:2,teamOne:"RMD",teamTwo:"PCB",scoreOne:0,scoreTwo:4}
  constructor() { }

  ngOnInit() {
  }

}
