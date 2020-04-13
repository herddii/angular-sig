import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {AuthenticateComponent} from './pages/authenticate/authenticate.component';
import { LayoutsComponent } from './pages/layouts/layouts.component';
const routes: Routes = [
  {
    path: '',
    component: AuthenticateComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('./pages/authenticate/authenticate.module')
        .then(m => m.AuthenticateModule)
      }
    ]
  },
  {
    path: 'dashboard',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/layouts/layouts.module')
        .then(m => m.LayoutsModule),
      },
    ]
  },
  { path: '**', redirectTo: 'authenticate'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
