import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // imgArr= ['../../../assets/1.jpg','../../../assets/prf.png','../../../assets/prf.png'];
  imgArrNew=[

    {
      srcImage: '../../../assets/prf.png',
      name:'Jobless Steve',
      fb:'https://www.facebook.com/',
      twitter:'https://twitter.com/',
      instagram:'https://www.instagram.com/?hl=en'
    },
    {
      srcImage: '../../../assets/prf.png',  
      name:'Steve gets Job',
      fb:'https://www.facebook.com/',
      twitter:'https://twitter.com/',
      instagram:'https://www.instagram.com/?hl=en'
    },
    {
      srcImage: '../../../assets/prf.png',
      name:'Steve Jobs',
      fb:'https://www.facebook.com/',
      twitter:'https://twitter.com/',
      instagram:'https://www.instagram.com/?hl=en'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
