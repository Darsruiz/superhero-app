import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperHeroComponent } from './components/super-hero/super-hero.component';

const routes: Routes = [
  { path: 'superheroes', component: SuperHeroComponent },
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
