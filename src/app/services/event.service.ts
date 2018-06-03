import {APP_BASE_HREF} from "@angular/common";
import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {EventModel} from '../models/eventModel';

const Header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // ------------------------ Event URL ------------------------------------------------------
  getAllURL: string = '/api/event/getAll';
  getByIdURL: string = '/api/event/getById';
  addURL: string = '/api/event/add';
  updateURL: string = '/api/event/update';
  deleteURL: string = '/api/event/delete';
// -------------------------  Post URL ------------------------------------------------------
  _idEvent: string = '';
  post_getAllURL: string = `/api/event/${this._idEvent}/getAll`;
  post_getByIdURL: string = `/api/event/${this._idEvent}/getById`;
  post_addURL: string = `/api/event/${this._idEvent}/add`;
  post_updateURL: string = `/api/event/${this._idEvent}/update`;
  post_deleteURL: string = `/api/event/${this._idEvent}/delete`;

  constructor(private http: HttpClient,
              @Optional() @Inject(APP_BASE_HREF) origin: string) {
    this.getAllURL = `${origin}${this.getAllURL}`;
    this.getByIdURL = `${origin}${this.getByIdURL}`;
    this.addURL = `${origin}${this.addURL}`;
    this.updateURL = `${origin}${this.updateURL}`;
    this.deleteURL = `${origin}${this.deleteURL}`;
  }

  // ------------------------------------ Get All ----------------------------------------------------
  getAll(): Observable<EventModel[]> {
    return this.http.post<EventModel[]>(this.getAllURL, '', Header);
  };

  // ------------------------------------ Get By ID --------------------------------------------------
  getById(reqBody): Observable<EventModel> {
    return this.http.post<EventModel>(this.getByIdURL, reqBody, Header);
  };

  // ------------------------------------- Add --------------------------------------------------------
  add(reqBody): Observable<EventModel> {
    return this.http.post<EventModel>(this.addURL, reqBody, Header);
  }

  // ------------------------------------- Update ----------------------------------------------------
  update(reqBody): Observable<EventModel> {
    return this.http.put<EventModel>(this.updateURL, reqBody, Header);
  }

  // ------------------------------------- Delete ----------------------------------------------------
  delete(_id): Observable<any> {
    return this.http.delete<String>(`${this.deleteURL}/${_id}`, Header);
  }

  // ------------------------------------- E


}
