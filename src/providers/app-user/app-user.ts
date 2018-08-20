import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppUserProvider {

  constructor(private http: HttpClient) { }
    apiURL:string = "http://localhost:3000/api/appUsers";
  
  register(NewUserData){
      return this.http.post(this.apiURL, NewUserData)
  }
  
  login(userData){
      return this.http.post(this.apiURL + '/login', userData);
  }
  
  logout(token) {
    return this.http.post(this.apiURL + '/logout' + '?access_token=' + token, {})
  }
  
  getUser(id, token) {
    return this.http.get(this.apiURL + '/' + id + '?access_token=' + token)
  }

}
