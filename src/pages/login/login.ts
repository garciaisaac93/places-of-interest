import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUserProvider } from '../../providers/app-user/app-user';
import { RegisterPage } from '../../pages/register/register';
import { HomePage } from '../home/home';


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
    
    routeToRegister(){
      this.navCtrl.push(RegisterPage)
    }

    onLogin() {
      this.AppUserProvider.login(this.user)
        .subscribe((response: any) => {
          window.sessionStorage.setItem('token', response.token)
          window.sessionStorage.setItem('userId', response.userId)
          this.navCtrl.push(HomePage);
          console.log(response);
      })
    }
  
  }


