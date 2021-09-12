import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeRootObject } from '../models/home.model';
import { UserRootObject } from '../models/userInfo.model';

@Injectable({
  providedIn: 'root'
})

export class DataProccessService {

  constructor(private http : HttpClient) { }

  getHomeData() : Observable<HomeRootObject> {
    return this.http.get<HomeRootObject>('https://api.vasapi.click/store/7')
  }

  getNavChildren() : Observable<any> {
    return this.http.get<any>('https://api.vasapi.click/category/7/0')
  }

  getUserInfo() : Observable<UserRootObject> {
    return this.http.get<UserRootObject>('https://api.vasapi.click/profile')
  }
}
