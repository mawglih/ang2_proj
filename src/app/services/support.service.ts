import { Injectable } from '@angular/core';
import { Sup } from '../shared/sup';
import { SUPPORT } from '../shared/support';

@Injectable()
export class SupportService {

  constructor() { }
    getSupport(): Sup[]{
      return SUPPORT;
  }
    getFeaturedSupport(): Sup {
      return SUPPORT.filter((sup) => sup.featured)[0];
    }
}
