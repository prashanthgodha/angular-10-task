import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckAvailComponent } from './components/pages/check-avail/check-avail.component';
import { DetailsComponent } from './components/pages/details/details.component';
const routes: Routes = [
  { path: 'check-avail', component: CheckAvailComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
