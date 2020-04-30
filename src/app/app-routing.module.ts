import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {DetailComponent} from './components/detail/detail.component';


const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'car/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
