import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss']
})
export class PopComponent implements OnInit {
  goals =[];
  constructor(private _data: DataService) {

   }
   selectedDevice = 'Here will display the selected value';
   onChange(newValue) {
     console.log(newValue);
     this.selectedDevice = newValue;
   }
  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

}
