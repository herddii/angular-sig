import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AuthenticateRoutingModule } from './authenticate-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    AuthenticateRoutingModule
  ]
})
export class AuthenticateModule { }
