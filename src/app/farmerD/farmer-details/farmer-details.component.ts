import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { FarmerDataModel } from '../../shared/farmerData.model';
import { FarmerInfoService } from '../../shared/farmer-info.service';
@Component({
  selector: 'app-farmer-details',
  templateUrl: './farmer-details.component.html',
  styleUrls: ['./farmer-details.component.css']
})
export class FarmerDetailsComponent implements OnInit {

  farmerData:FarmerDataModel;
  id:number;
  
  constructor(private farmerInfoService: FarmerInfoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params:Params) =>{
          this.id = +params['id'];
          this.farmerData = this.farmerInfoService.getFarmer(this.id);
        } 
      );
  }

  

}
