import {APP_BASE_HREF} from "@angular/common";
import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {TagModel} from '../models/TagModel';

const Header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class TagService {
  getAllURL: string = '/api/tag/getAll';
  getByIdURL: string = '/api/tag/getById';
  addURL: string = '/api/tag/add';
  updateURL: string = '/api/tag/update';
  deleteURL: string = '/api/tag/delete';

  constructor(private http: HttpClient,
              @Optional() @Inject(APP_BASE_HREF) origin: string) {
    this.getAllURL = `${origin}${this.getAllURL}`;
    this.getByIdURL = `${origin}${this.getByIdURL}`;
    this.addURL = `${origin}${this.addURL}`;
    this.updateURL = `${origin}${this.updateURL}`;
    this.deleteURL = `${origin}${this.deleteURL}`;
  }

  // ------------------------------------ Get All ----------------------------------------------------
  getAll(): Observable<TagModel[]> {
    return this.http.post<TagModel[]>(this.getAllURL, '', Header);
  };

  // ------------------------------------ Get By ID --------------------------------------------------
  getById(reqBody): Observable<TagModel> {
    return this.http.post<TagModel>(this.getByIdURL, reqBody, Header);
  };

  // ------------------------------------- Add --------------------------------------------------------
  add(reqBody): Observable<TagModel> {
    return this.http.post<TagModel>(this.addURL, reqBody, Header);
  }

  // ------------------------------------- Update ----------------------------------------------------
  update(reqBody): Observable<TagModel> {
    return this.http.put<TagModel>(this.updateURL, reqBody, Header);
  }

  // ------------------------------------- Delete ----------------------------------------------------
  delete(_id): Observable<any> {
    return this.http.delete<String>(`${this.deleteURL}/${_id}`, Header);
  }


}
