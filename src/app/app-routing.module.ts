import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
  },
  {
    path: 'news-single',
    loadChildren: () => import('./news-single/news-single.module').then(m => m.NewsSinglePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
