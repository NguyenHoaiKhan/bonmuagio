import {APP_BASE_HREF} from "@angular/common";
import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {DonateModel} from '../models/DonateModel';

@Injectable({
  providedIn: 'root'
})
export class DonateService {
  getAllURL: String = ''

  constructor(private http: HttpClient,
              @Optional() @Inject(APP_BASE_HREF) origin: string) {

  }

  getAll(): Observable<DonateModel[]> {
    return this.http.post<DonateModel[]>('', '');
  }


}
