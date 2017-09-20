import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FarmerDataComponent } from './farmerD/farmer-data/farmer-data.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FarmerInfoService } from './shared/farmer-info.service';
import { FarmerComponent } from './farmerD/farmer-data/farmer/farmer.component';
import { FarmerDetailsComponent } from './farmerD/farmer-details/farmer-details.component';
import { FarmerD } from './farmerD/farmerD.component';
import { FarmerNoneComponent } from './farmerD/farmer-none/farmer-none.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FarmerDataComponent,
    AboutComponent,
    HomeComponent,
    FarmerComponent,
    FarmerDetailsComponent,
    FarmerD,
    FarmerNoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ FarmerInfoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
