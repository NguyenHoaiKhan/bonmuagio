import {APP_BASE_HREF} from "@angular/common";
import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {DonateModel} from '../models/DonateModel';

const Header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class DonateService {
  getAllURL: string = '/api/donate/getAll';
  getByIdURL: string = '/api/donate/getById';
  addURL: string = '/api/donate/add';
  updateURL: string = '/api/donate/update';
  deleteURL: string = '/api/donate/delete';

  constructor(private http: HttpClient,
              @Optional() @Inject(APP_BASE_HREF) origin: string) {
    this.getAllURL = `${origin}${this.getAllURL}`;
    this.getByIdURL = `${origin}${this.getByIdURL}`;
    this.addURL = `${origin}${this.addURL}`;
    this.updateURL = `${origin}${this.updateURL}`;
    this.deleteURL = `${origin}${this.deleteURL}`;
  }

  // ------------------------------------ Get All ----------------------------------------------------
  getAll(): Observable<DonateModel[]> {
    return this.http.post<DonateModel[]>(this.getAllURL, '', Header);
  };

  // ------------------------------------ Get By ID --------------------------------------------------
  getById(reqBody): Observable<DonateModel> {
    return this.http.post<DonateModel>(this.getByIdURL, reqBody, Header);
  };

  // ------------------------------------- Add --------------------------------------------------------
  add(reqBody): Observable<DonateModel> {
    return this.http.post<DonateModel>(this.addURL, reqBody, Header);
  }

  // ------------------------------------- Update ----------------------------------------------------
  update(reqBody): Observable<DonateModel> {
    return this.http.put<DonateModel>(this.updateURL, reqBody, Header);
  }

  // ------------------------------------- Delete ----------------------------------------------------
  delete(_id): Observable<any> {
    return this.http.delete<String>(`${this.deleteURL}/${_id}`, Header);
  }


}
