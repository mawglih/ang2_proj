import { Injectable } from '@angular/core';
import { Web } from '../shared/web';
import { WEBSITES } from '../shared/websites';

@Injectable()
export class WebService {

  constructor() { }
  getWebsites(): Web[]{
    return WEBSITES;
  }
  getFeaturedWebsite(): Web {
    return WEBSITES.filter((web) => web.featured)[0];
  }

}
