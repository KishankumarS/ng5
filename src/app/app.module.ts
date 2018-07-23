import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DataService} from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Angular5Component } from './angular5/angular5.component';
import { NewService } from './new.service';
import { FromComponent } from './from/from.component';
import { FromService } from './from.service';
import { WeatherComponent } from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { SpecialComponent } from './special/special.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    Angular5Component,
    FromComponent,
    WeatherComponent,
    SpecialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,HttpClientModule, HttpModule,SelectDropDownModule
  ],
  providers: [DataService,NewService,FromService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
