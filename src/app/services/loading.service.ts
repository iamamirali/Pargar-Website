import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  requestCount : number = 0
  subjectLoader : Subject<boolean> = new Subject();

  showLoading() {
    this.requestCount++
    if(this.requestCount > 0) {
      this.subjectLoader.next(true)
    }
  }

  hideLoading() {
    this.requestCount--
    if(this.requestCount <= 0) {
      this.subjectLoader.next(false)
    }
  }
}