import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
title:string="Latest News";
newsTab:any=[{id:1,image:"assets/images/img_1.jpg",title:"title1",avatar:"assets/images/person_1.jpg",userName:"baya",date:"5/3/2022"},
{id:2,image:"assets/images/img_2.jpg",title:"title2",avatar:"assets/images/person_2.jpg",userName:"zakaria",date:"6/4/2022"},
{id:3,image:"assets/images/img_3.jpg",title:"title3",avatar:"assets/images/person_3.jpg",userName:"YAHYA",date:"7/8/2022"},
{id:4,image:"assets/images/img_1.jpg",title:"title1",avatar:"assets/images/person_4.jpg",userName:"HAROUN",date:"3/4/2022"}
]


  constructor() { }

  ngOnInit() {
  }

}
