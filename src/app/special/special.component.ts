import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {
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
