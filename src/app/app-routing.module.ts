import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: '' , loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  {path: 'profile' , loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
