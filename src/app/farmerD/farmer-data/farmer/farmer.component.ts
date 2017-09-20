import { Component, OnInit,Input } from '@angular/core';
import { FarmerDataModel } from '../../../shared/farmerData.model';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  @Input() farmer: FarmerDataModel;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
