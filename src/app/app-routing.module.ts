import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToProfile = () => redirectLoggedInTo(['profile']);



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'ar',
    loadChildren: () =>
      import('./pages/ar/ar.module').then((m) => m.ArPageModule),
  },
  {
    path: 'sculptures',
    loadChildren: () =>
      import('./pages/sculptures/sculptures.module').then(
        (m) => m.SculpturesPageModule
      ),
  },
  {
    path: 'paintings',
    loadChildren: () =>
      import('./pages/paintings/paintings.module').then(
        (m) => m.PaintingsPageModule
      ),
  },
  {
    path: 'artists',
    loadChildren: () =>
      import('./pages/artists/artists.module').then((m) => m.ArtistsPageModule),
  },
  {
    path: 'how-art',
    loadChildren: () =>
      import('./pages/how-art/how-art.module').then((m) => m.HowArtPageModule),
  },

  {
    path: 'digital',
    loadChildren: () =>
      import('./pages/digital/digital.module').then((m) => m.DigitalPageModule),
  },
  {
    path: 'artistainfo',
    loadChildren: () => import('./pages/artistainfo/artistainfo.module').then(m => m.ArtistainfoPageModule)
  },
  {
    path: 'articulo',
    loadChildren: () => import('./pages/articulo/articulo.module').then(m => m.ArticuloPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),

  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'myart',
    loadChildren: () => import('./pages/myart/myart.module').then(m => m.MyartPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
