import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { UrlService } from '../url/url.service';
import { Employee } from '../../.model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  token: string;

  constructor(
    public http: HttpClient,
    public url: UrlService,
  ) {
   }

  getEmployee(val,pages, form): Observable<Employee []> {
      
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer '+val
        })
      };
    return this.http.post<Employee []>(this.url.urlApi + 'master/karyawan?page='+pages,form,httpOptions).pipe( map(data => {
        return data;
      })
    );
  };

  getEmployeeDetail(val,id): Observable<Employee []> {
      
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer '+val
        })
      };
    return this.http.get<Employee []>(this.url.urlApi + 'master/karyawan/'+id,httpOptions).pipe( map(data => {
        return data;
      })
    );
  };
}
