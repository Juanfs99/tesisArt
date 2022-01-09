import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ar',
    loadChildren: () => import('./pages/ar/ar.module').then( m => m.ArPageModule)
  },
  {
    path: 'sculptures',
    loadChildren: () => import('./pages/sculptures/sculptures.module').then( m => m.SculpturesPageModule)
  },
  {
    path: 'paintings',
    loadChildren: () => import('./pages/paintings/paintings.module').then( m => m.PaintingsPageModule)
  },
  {
    path: 'artists',
    loadChildren: () => import('./pages/artists/artists.module').then( m => m.ArtistsPageModule)
  },
  {
    path: 'how-art',
    loadChildren: () => import('./pages/how-art/how-art.module').then( m => m.HowArtPageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./pages/others/others.module').then( m => m.OthersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
