import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(
    private login: LoginService,
    private storage: LocalStorage,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if(f.valid){
      this.login.redirect(f.value).then(x =>{
        this.setStorage(x);
      }).catch(e => {
        this.hide = false;
        setTimeout(()=>{
          this.hide = true;
        },3000);
      });
    } else {
      // console.log('aaaaa');
      this.hide = false;
      setTimeout(()=>{
        this.hide = true;
      },3000);
    }
  }


  async setStorage(v){
    await this.storage.setItem('token',v).subscribe(o => console.log(o));
    await this.router.navigate(['dashboard']);
    // this.getStorage();
  }

  async getStorage(){
    await this.storage.getItem('token').subscribe(val => console.log(val['token']));
  }

}
