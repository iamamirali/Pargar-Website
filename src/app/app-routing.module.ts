import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/layout/not-found/not-found.component';

const routes: Routes = [
  {path: '' , loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  {path: 'profile' , loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)},
  {path: '**' , redirectTo: '/not-found'},
  {path: 'not-found' , component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
