import { Component, OnInit, OnDestroy } from '@angular/core';
import { FarmerInfoService } from '../../shared/farmer-info.service';
import { FarmerDataModel } from '../../shared/farmerData.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-data',
  templateUrl: './farmer-data.component.html',
  styleUrls: ['./farmer-data.component.css']
})
export class FarmerDataComponent implements OnInit,OnDestroy {

  farmerData:FarmerDataModel[];
  subscription:Subscription;
  
  constructor(private famrerInfoService: FarmerInfoService, private router:Router) { }

  ngOnInit() {
    this.subscription=this.famrerInfoService.getAPIData().subscribe(
      apiData => {
        //this.data=apiData;
        //console.log(this.data);
        this.farmerData=apiData;
        console.log(this.farmerData);
      }
    );
  }

  onNewFarmer(){
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
