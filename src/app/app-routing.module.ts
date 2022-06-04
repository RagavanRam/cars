import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  {path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule)},
  {path: 'cars/:id', loadChildren: () => import('./view-car/view-car.module').then(m => m.ViewCarModule)},
  {path: '**', redirectTo: '/cars'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
