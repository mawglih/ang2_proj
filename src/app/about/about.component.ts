import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { About } from '../shared/about';
import { WebService } from '../services/web.service';
import { Web } from '../shared/web';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  abouts: About[];
  web: Web[];


  constructor(private aboutService: AboutService, private webservice: WebService) { }

  ngOnInit() {
    this.abouts = this.aboutService.getAbouts();
    this.web = this.webservice.getWebsites();
  }

}
