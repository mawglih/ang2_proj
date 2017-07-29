import { Component, OnInit } from '@angular/core';
import { Sup } from '../shared/sup';
import { SupportService } from '../services/support.service';
import { Web } from '../shared/web';
import { WebService } from '../services/web.service';
import { About } from '../shared/about';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  about: About;
  support: Sup;
  web: Web;


  constructor(private aboutservice: AboutService, private webservice: WebService, private supportservice: SupportService) { }

  ngOnInit() {
    this.about = this.aboutservice.getFeauturedAbout();
    this.support = this.supportservice.getFeaturedSupport();
    this.web = this.webservice.getFeaturedWebsite();

  }

}
