import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDataComponent } from './components/display-data/display-data.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
