import {APP_BASE_HREF} from "@angular/common";
import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {UserModel} from '../models/UserModel';

const getHttpOptions = (token) => {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    })
  };
};

const Header = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // ------------------------------------ URL ----------------------------------------------------------
  protected signInURL: string = '/api/user/signIn';
  protected signUpURL: string = '/api/user/signUp';
  protected secretURL: string = '/api/user/secret';
  protected changePasswordURL: string = '/api/user/changePassword';
  protected getAllURL: string = '/api/user/getAll';
  protected getByIdURL: string = '/api/user/getById';
  protected getByUserNameURL: string = '/api/user/getByUserName';
  protected profile_editURL: string = '/api/user/profile_edit';

  constructor(
    private http: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin: string) {
    this.signInURL = `${origin}${this.signInURL}`;
    this.signUpURL = `${origin}${this.signInURL}`;
    this.secretURL = `${origin}${this.secretURL}`;
    this.changePasswordURL = `${origin}${this.changePasswordURL}`;
    this.getAllURL = `${origin}${this.getAllURL}`;
    this.getByIdURL = `${origin}${this.getByIdURL}`;
    this.getByUserNameURL = `${origin}${this.getByUserNameURL}`;
    this.profile_editURL = `${origin}${this.profile_editURL}`;
  }

  // ------------------------------------- sign in ----------------------------------------------------
  signIn(reqBody): Observable<any> {
    return this.http.post<any>(this.signInURL, reqBody, Header).pipe();
  }

  // -------------------------------------- sign up ----------------------------------------------------
  signUp(reqBody): Observable<any> {
    return this.http.post<any>(this.signUpURL, reqBody, Header).pipe();
  }

  // -------------------------------------- Get Information -------------------------------------------------
  secret(token): Observable<UserModel> {
    return this.http.post<UserModel>(this.secretURL, '', getHttpOptions(token));
  }

  // -------------------------------------- changePassword -------------------------------------------------
  changePassword(reqBody): Observable<UserModel> {
    return this.http.put<UserModel>(this.changePasswordURL, reqBody, Header);
  }

  // -------------------------------------- Get All -------------------------------------------------------
  getAll(): Observable<UserModel[]> {
    return this.http.post<UserModel[]>(this.getAllURL, '', Header);
  }

  // -------------------------------------- Get By ID ----------------------------------------------------
  getById(reqBody): Observable<UserModel> {
    return this.http.post<UserModel>(this.getByIdURL, reqBody, Header);
  }

  // ------------------------------------- Get By Username -----------------------------------------------
  getByUserName(reqBody): Observable<UserModel> {
    return this.http.post<UserModel>(this.getByUserNameURL, reqBody, Header);
  }

  // ------------------------------------- Get By Username -----------------------------------------------
  profile_edit(reqBody, id): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.getByUserNameURL}/${id}`, reqBody, Header);
  }
}
