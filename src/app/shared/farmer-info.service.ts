import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { FarmerDataModel } from './farmerData.model';
import 'rxjs/add/operator/map';
@Injectable()
export class FarmerInfoService {
  
  farmerData:FarmerDataModel[];
  //data:any;
  constructor(private http:Http) { 
    this.setFarmerData();
  }

  getAPIData(){
    return this.http.get('http://localhost:3000/api/farmerInfo')
        .map( (res:Response)=>res.json());
  }

  getFarmer(index:number){
    return this.farmerData[index];
  }

  setFarmerData(){
    this.getAPIData().subscribe(
      apiData => {
        this.farmerData=apiData;
      }
    );
  }
  
}
