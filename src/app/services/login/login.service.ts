import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { UrlService } from '../url/url.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(
    public http: HttpClient,
    public storage: LocalStorage,
    public url: UrlService
  ) { }

  redirect(val){
    // return val;
    return new Promise((resolve, reject) =>{
      
      this.http.post(this.url.url+'auth/login',val).pipe(map(res=>res)).subscribe(data =>{
          resolve(data);
        }, (err)=>{
          reject(err);
        })
    })
  }

  checking_me() {
    return new Promise((resolve, reject) => {
      this.storage.getItem('token').subscribe(val => {
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer '+val['token']
        })
      };
        this.http.get(this.url.url+'me',httpOptions).pipe(
          map(res => res)).subscribe(data => {
            resolve(data);
          }, (err) => {
            reject(err);
          })
      })
    })
  }

  refresh(){
    return new Promise((resolve, reject)=>{
      this.storage.getItem('token').subscribe(value => {
        let headers = new HttpHeaders;
        headers.append('Content-Type','application/json');
        headers.append('Authorization', 'Bearer '+value);

        this.http.post(this.url.url+'auth/refresh',{e:'e'}).pipe(
          map(res=>res)).subscribe(data =>{
            resolve(data);
          }, (err)=>{
            reject(err);
          })
      })
    })
  }
}
