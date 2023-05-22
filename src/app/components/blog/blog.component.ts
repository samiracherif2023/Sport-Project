import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
articlesTab:any=[
  {image:"assets/images/img_1.jpg",date:"5/3/2011",title:"title1",description:"description1",},
  {image:"assets/images/img_2.jpg",date:"25/4/2011",title:"title2",description:"description2",},
  {image:"assets/images/img_3.jpg",date:"15/2/2010",title:"title3",description:"description3",}
]
  constructor() { }

  ngOnInit() {
  }

}
