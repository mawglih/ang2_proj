import { Component, OnInit } from '@angular/core';
import { Main } from '../shared/main';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  main: Main [] = [
    {
      name:'Qestionnaire',
      image: '/assets/images/img1.png',
      description: 'Fill out the questionnaire'
    },
    {
      name:'Website links',
      image: '/assets/images/img2.png',
      description: 'Links to the websites that were created recently'
    },
    {
      name:'Support material',
      image: '/assets/images/img3.png',
      description:'Links to websites with support material'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
