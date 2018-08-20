import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUserProvider } from '../../providers/app-user/app-user';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private AppUserProvider: AppUserProvider, public navCtrl: NavController, public navParams: NavParams) {}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  
    user: any = {
      email: "",
      password: ""
    };
    
    onLogin() {
      this.AppUserProvider.login(this.user)
        .subscribe((response: any) => {
          window.sessionStorage.setItem('token', response.token)
          window.sessionStorage.setItem('userId', response.userId)
          //this.router.navigateByUrl('/home');
          console.log(response);
      })
    }
  
  }


