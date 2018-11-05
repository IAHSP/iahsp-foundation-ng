import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageFrontComponent } from './page-front/page-front.component';

const routes: Routes = [
  {
    path: '',
    component: PageFrontComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
