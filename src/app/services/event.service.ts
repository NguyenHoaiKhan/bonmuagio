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
  protected getAllURL: string = '/api/event/getAll';
  protected getByIdURL: string = '/api/event/getById';
  protected addURL: string = '/api/event/add';
  protected updateURL: string = '/api/event/update';
  protected deleteURL: string = '/api/event/delete';
// -------------------------  Post URL ------------------------------------------------------
  protected origin: string = '';
  protected post_getAllURL: string;
  protected post_getByIdURL: string;
  protected post_addURL: string;
  protected post_updateURL: string;
  protected post_deleteURL: string;

  constructor(private http: HttpClient,
              @Optional() @Inject(APP_BASE_HREF)  origin: string) {
    this.origin = origin;
    this.getAllURL = `${origin}${this.getAllURL}`;
    this.getByIdURL = `${origin}${this.getByIdURL}`;
    this.addURL = `${origin}${this.addURL}`;
    this.updateURL = `${origin}${this.updateURL}`;
    this.deleteURL = `${origin}${this.deleteURL}`;
  }

// --------------------------------------- Event Service --------------------------------------------

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

  // ------------------------------------- Post Service ----------------------------------------------

  // -------------------------------------- Get All -------------------------------------------------
  post_getAll(_idEvent): Observable<any> {
    this.post_getAllURL = `${this.origin}/api/event/${_idEvent}/post_getAll`;
    return this.http.post<any>(this.getAllURL, '', Header);
  };

  // ------------------------------------ Get By ID --------------------------------------------------
  post_getById(_idEvent, reqBody): Observable<any> {
    this.post_getByIdURL = `${this.origin}/api/event/${_idEvent}/post_getById`;
    return this.http.post<any>(this.getByIdURL, reqBody, Header);
  };

  // ------------------------------------- Add --------------------------------------------------------
  post_add(_idEvent, reqBody): Observable<any> {
    this.post_addURL = `${this.origin}/api/event/${_idEvent}/post_add`;
    return this.http.post<any>(this.addURL, reqBody, Header);
  }

  // ------------------------------------- Update ----------------------------------------------------
  post_update(_idEvent, reqBody): Observable<any> {
    this.post_updateURL = `${this.origin}/api/event/${_idEvent}/post_update`;
    return this.http.put<any>(this.updateURL, reqBody, Header);
  }

  // ------------------------------------- Delete ----------------------------------------------------
  post_delete(_idEvent, _id): Observable<any> {
    this.post_deleteURL = `${this.origin}/api/event/${_idEvent}/post_delete`;
    return this.http.delete<String>(`${this.deleteURL}/${_id}`, Header);
  }

  // ------------------------------------- Separated Work Service ----------------------------------------------

  // -------------------------------------- Get All -------------------------------------------------
  separatedWork_getAll(_idEvent): Observable<any> {
    this.post_getAllURL = `${this.origin}/api/event/${_idEvent}/separatedWork_getAll`;
    return this.http.post<any>(this.getAllURL, '', Header);
  };

  // ------------------------------------ Get By ID --------------------------------------------------
  separatedWork_getById(_idEvent, reqBody): Observable<any> {
    this.post_getByIdURL = `${this.origin}/api/event/${_idEvent}/separatedWork_getById`;
    return this.http.post<any>(this.getByIdURL, reqBody, Header);
  };

  // ------------------------------------- Add --------------------------------------------------------
  separatedWork_add(_idEvent, reqBody): Observable<any> {
    this.post_addURL = `${this.origin}/api/event/${_idEvent}/separatedWork_add`;
    return this.http.post<any>(this.addURL, reqBody, Header);
  }

  // ------------------------------------- Update ----------------------------------------------------
  separatedWork_update(_idEvent, reqBody): Observable<any> {
    this.post_updateURL = `${this.origin}/api/event/${_idEvent}/separatedWork_update`;
    return this.http.put<any>(this.updateURL, reqBody, Header);
  }

  // ------------------------------------- Delete ----------------------------------------------------
  separatedWork_delete(_idEvent, _id): Observable<any> {
    this.post_deleteURL = `${this.origin}/api/event/${_idEvent}/separatedWork_delete`;
    return this.http.delete<String>(`${this.deleteURL}/${_id}`, Header);
  }



}
