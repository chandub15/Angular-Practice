import { Component, OnInit } from '@angular/core';
import {ArticlesClass } from './articles';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  
  // articles:[{ srcImage:string;
  //   date:string;
  //   titile:string;
  //   body:string;
  //   detailsOne:string;
  //   detailstwo:string;}];
  constructor() { }

  ngOnInit() {
  }
  abc='hei';

articlesData:[{
   srcImage:'../../../assets/1.jpg',
   date:'March 2,2014',
   title:'21st Century Ansel Adams',
   body:'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
   detailsOne:'Camera',
   detailsTwo:'Nature'

  },
  {
   srcImage:'../../../assets/1.jpg',
   date:'February 27,2014',
   title:'The new canon 500DX',
   body:'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
   detailsOne:'Gear',
   detailsTwo:'Review'
  },
  {
   srcImage: '../../../assets/1.jpg',
   date:'January 15,2014',
   title:'Grand Canyon Uncharted',
   body:'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
   detailsOne:'Photography',
   detailsTwo:'Nature'
  },
  {
   srcImage:'../../../assets/2.jpg',
   date:'March 2,2013',
   title:'Discovering Lake Titicaca',
   body:'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
   detailsOne:'Travel',
   detailsTwo:'South America'
  }
];

arr=[
  {srcImage:'../../../assets/1.jpg',
  date:'March 2,2014',
  title:'21st Century Ansel Adams',
  body:'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
  detailsOne:'Camera',
  detailsTwo:'Nature'

 },
 {
  srcImage:'../../../assets/1.jpg',
  date:'February 27,2014',
  title:'The new canon 500DX',
  body:'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
  detailsOne:'Gear',
  detailsTwo:'Review'
 },
  {
  srcImage:'../../../assets/2.jpg',
   date:'March 2,2013',
   title:'Discovering Lake Titicaca',
   body:'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
   detailsOne:'Travel',
   detailsTwo:'South America'
},
{
  srcImage: '../../../assets/1.jpg',
   date:'January 15,2014',
   title:'Grand Canyon Uncharted',
   body:'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
   detailsOne:'Photography',
   detailsTwo:'Nature'
}
];


}
