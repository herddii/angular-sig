import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  NbThemeModule, 
  NbLayoutModule, 
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbCheckboxModule,
  NbToggleModule,
  NbSidebarModule,
  NbMenuModule,
  NbSelectModule,
  NbIconModule,
  NbPopoverModule,
  NbDialogModule,
  NbContextMenuModule,
  NbActionsModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LayoutsComponent } from './pages/layouts/layouts.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';
import { LoginComponent } from './pages/login/login.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ModalComponent } from './pages/modal/modal.component';
import { LogoutComponent } from './pages/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutsComponent,
    SidebarComponent,
    NavbarComponent,
    AuthenticateComponent,
    LoginComponent,
    LoaderComponent,
    ModalComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbCardModule,
    NbPopoverModule,
    NbIconModule,
    NbActionsModule,
    InfiniteScrollModule,
    NbContextMenuModule,
    NbDialogModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbSelectModule,
    Ng2SmartTableModule,
    NbInputModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NbCheckboxModule,
    NbSidebarModule.forRoot(),
    NbToggleModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
