import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  
  hide = true;
  message: any;

  constructor(
    private spinner: NgxSpinnerService,
    public storage: LocalStorage,
    public route: Router,
    private login: LoginService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.hide = true;
    if(this.storage.hasOwnProperty("token")){
      this.storage.getItem('token').subscribe(val => {
        console.log(val['token']);
        if(val['token']){
          this.login.checking_me()
          .then(h => this.route.navigate(['dashboard']))
          .catch(e => {
            this.message = 'asu';
            setTimeout(()=>{
              this.spinner.hide();
              this.hide = false;
            },1000);
          });
        } else{
            this.message = 'You Have to Login !!';
            this.route.navigate(['login']);
        }
      });
    } else {
      console.log('loh gda')
      this.message = 'You Have to Login !!';
      setTimeout(()=>{
        this.spinner.hide();
        this.hide = false;
      },1000);
    }
    
    setTimeout(() => {
      this.spinner.hide();
      this.gotologin();

    }, 5000);
  }

  gotologin(){
    this.route.navigate(['login']);
  }

}
