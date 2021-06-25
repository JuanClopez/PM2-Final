import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./parcial/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'create-user',
    loadChildren: () => import('./parcial/create-user/create-user.module').then( m => m.CreateUserPageModule)
  },
  {
    path: 'detalle-user/:id',
    loadChildren: () => import('./parcial/detalle-user/detalle-user.module').then( m => m.DetalleUserPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./parcial/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'presion',
    loadChildren: () => import('./parcial/presion/presion.module').then( m => m.PresionPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
