import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUserProvider } from '../../providers/app-user/app-user';
import { HomePage } from '../../pages/home/home';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppUserProvider: AppUserProvider) {
  }

  user: any = {
    first: "",
    last: "",
    email: "",
    password: ""
  }

  onRegister() {
    this.AppUserProvider.register(this.user)
    .subscribe((response: any) => {
      window.sessionStorage.setItem('token', response.token)
      window.sessionStorage.setItem('userId', response.token)
      this.navCtrl.push(HomePage);
      console.log(response);
      
    })
  }

}

