import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopBannerService {

  constructor() { }

  subjectShowBanner = new BehaviorSubject<boolean>(true)
}
