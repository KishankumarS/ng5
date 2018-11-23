import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { Angular5Component } from './angular5/angular5.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { WeatherComponent } from './weather/weather.component';
import { PopComponent } from './pop/pop.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gallery/:id',
    component: GalleryComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'angular5/:id',
    component: Angular5Component
  },
  {
    path: 'from',
    component: DropdownComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'from',
    component: DropdownComponent
  },
  {
    path: 'pop',
    component: PopComponent
  }

];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
