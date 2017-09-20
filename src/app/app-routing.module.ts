import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FarmerDataComponent } from './farmerD/farmer-data/farmer-data.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FarmerD } from './farmerD/farmerD.component';
import { FarmerNoneComponent } from './farmerD/farmer-none/farmer-none.component';
import { FarmerDetailsComponent } from './farmerD/farmer-details/farmer-details.component';

const appRoutes:Routes = [
    { path: '' , redirectTo:'/home',pathMatch:'full'},
    { path: 'home' , component:HomeComponent},
    { path: 'viewData', component:FarmerD, children:[
		{path: '', component: FarmerNoneComponent, pathMatch:'full'},
		{path: ':id', component: FarmerDetailsComponent}
	]},
    { path: 'about' , component:AboutComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}