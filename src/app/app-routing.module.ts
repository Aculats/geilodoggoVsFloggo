import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { 
    path: 'newsignup',
    loadChildren: () => import('./newsignup/newsignup.module').then( m => m.NewSignUpModule)
  },
  {
    path: 'listregistrations',
    loadChildren: () => import('./listRegistrations/listRegistrations.module').then( m => m.ListRegistrationsModule)
  },
  {
    path: 'hunting',
    loadChildren: () => import('./smileyhunting/smileyhunting.module').then( m => m.SmileyHuntingModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
