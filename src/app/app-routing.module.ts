import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
  },
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then((m) => m.MoviesModule) },
  { path: 'series', loadChildren: () => import('./series/series.module').then((m) => m.SeriesModule) },
  { path: 'watch/:watchId', loadChildren: () => import('./watch/watch.module').then((m) => m.WatchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
