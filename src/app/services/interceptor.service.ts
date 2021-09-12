import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AuthorService } from './author.service';
import { LoadingService } from './loading.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private auth : AuthorService, private loading : LoadingService) { }

  intercept (req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
    if(this.auth.getToken()) {
      req = req.clone({
      setHeaders: {
        Authorization: `Token ${this.auth.getToken()}`,
      }
    })
    this.auth.isLoggedIn = true
    this.auth.subjectLoginStatus.next(this.auth.isLoggedIn)
    
  }

  this.loading.showLoading()

    return next.handle(req)
    .pipe(
      finalize(() => this.loading.hideLoading())
    )
  }
}
