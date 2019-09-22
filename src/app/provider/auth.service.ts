import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fb: Facebook) { }



  login(){
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
  }



}
