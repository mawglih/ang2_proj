import { Injectable } from '@angular/core'
import { About } from '../shared/about';
import { ABOUTS} from '../shared/abouts';

@Injectable()
export class AboutService {

  constructor() { }

  getAbouts(): About[]{
    return ABOUTS;
  }

  getFeauturedAbout(): About {
    return ABOUTS.filter((about) =>about.featured)[0];
  }

}
