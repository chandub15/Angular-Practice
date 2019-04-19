import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { AboutComponent } from './components/about/about.component';
import { ViewSuggestionsComponent } from './components/view-suggestions/view-suggestions.component';
const routes: Routes = [
  {
  path:'articles',
  component: ArticlesComponent
  },
  {
    path:'suggest',
    component: SuggestionsComponent
  },
  {
    path:'about',
    component: AboutComponent
    },
    {
      path:'view',
      component: ViewSuggestionsComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
