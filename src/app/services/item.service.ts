import {APP_BASE_HREF} from "@angular/common";
import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {ItemModel} from '../models/ItemModel';

const Header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getAllURL: string = '/api/item/getAll';
  getByIdURL: string = '/api/item/getById';
  addURL: string = '/api/item/add';
  updateURL: string = '/api/item/update';
  deleteURL: string = '/api/item/delete';

  constructor(private http: HttpClient,
              @Optional() @Inject(APP_BASE_HREF) origin: string) {
    this.getAllURL = `${origin}${this.getAllURL}`;
    this.getByIdURL = `${origin}${this.getByIdURL}`;
    this.addURL = `${origin}${this.addURL}`;
    this.updateURL = `${origin}${this.updateURL}`;
    this.deleteURL = `${origin}${this.deleteURL}`;
  }

  // ------------------------------------ Get All ----------------------------------------------------
  getAll(): Observable<ItemModel[]> {
    return this.http.post<ItemModel[]>(this.getAllURL, '', Header);
  };

  // ------------------------------------ Get By ID --------------------------------------------------
  getById(reqBody): Observable<ItemModel> {
    return this.http.post<ItemModel>(this.getByIdURL, reqBody, Header);
  };

  // ------------------------------------- Add --------------------------------------------------------
  add(reqBody): Observable<ItemModel> {
    return this.http.post<ItemModel>(this.addURL, reqBody, Header);
  }

  // ------------------------------------- Update ----------------------------------------------------
  update(reqBody): Observable<ItemModel> {
    return this.http.put<ItemModel>(this.updateURL, reqBody, Header);
  }

  // ------------------------------------- Delete ----------------------------------------------------
  delete(_id): Observable<any> {
    return this.http.delete<String>(`${this.deleteURL}/${_id}`, Header);
  }


}
