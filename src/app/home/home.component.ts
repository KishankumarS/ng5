import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  animations:[
    trigger('goals',[
      transition('* => *', [
      query(':enter',style({opacity: 0}),{optional: true}),

      query(':enter',stagger('300ms',[
        animate('.6s ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset:0}),
          style({opacity: .5, transform: 'translateY(35px)', offset:.3}),
          style({opacity: 1, transform: 'translateY(0)', offset:1})
        ]))]),{optional: true}),

      query(':leave',stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset:0}),
            style({opacity: .5, transform: 'translateY(35px)', offset:.3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset:1})
          ]))]),{optional: true})

    ])
  ])
  ]
})
export class HomeComponent implements OnInit {

itemCount: number;
btnTxt: string = "Add an Item";
goalText: string = "My first life goal";
goals =[];

  constructor( private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
      this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);

  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText ='';
    this.itemCount= this.goals.length;
    this._data.changeGoal(this.goals);
  }
  removeItem(i){
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }


  tab=1;
  singleSelect: any=[];
  multiSelect: any=[];
  stringArray: any=[];
  objectsArray: any=[];
  stringOptions = [
      "Burns Dalton","Mcintyre Lawson","Amie Franklin","Jocelyn Horton","Fischer Erickson", "Medina Underwood","Goldie Barber"
  ]
  config = {
    displayKey:"name", //if objects array passed which key to be displayed defaults to description
    search:true,
  };
  selectedOptions=[{
    "_id": "5a66d6c31d5e4e36c7711b7a",
    "index": 0,
    "balance": "$2,806.37",
    "picture": "http://placehold.it/32x32",
    "name": "Burns Dalton"
  },
  {
    "_id": "5a66d6c3657e60c6073a2d22",
    "index": 1,
    "balance": "$2,984.98",
    "picture": "http://placehold.it/32x32",
    "name": "Mcintyre Lawson"
  }];
  options=[
    {
      "_id": "5a66d6c31d5e4e36c7711b7a",
      "index": 0,
      "balance": "$2,806.37",
      "picture": "http://placehold.it/32x32",
      "name": "Burns Dalton"
    },
    {
      "_id": "5a66d6c3657e60c6073a2d22",
      "index": 1,
      "balance": "$2,984.98",
      "picture": "http://placehold.it/32x32",
      "name": "Mcintyre Lawson"
    },
    {
      "_id": "5a66d6c376be165a5a7fae33",
      "index": 2,
      "balance": "$2,794.16",
      "picture": "http://placehold.it/32x32",
      "name": "Amie Franklin"
    },
    {
      "_id": "5a66d6c3f7854b6b4d96333b",
      "index": 3,
      "balance": "$2,537.14",
      "picture": "http://placehold.it/32x32",
      "name": "Jocelyn Horton"
    },
    {
      "_id": "5a66d6c31f967d4f3e9d84e9",
      "index": 4,
      "balance": "$2,141.42",
      "picture": "http://placehold.it/32x32",
      "name": "Fischer Erickson"
    },
    {
      "_id": "5a66d6c34cfa8cddefb31602",
      "index": 5,
      "balance": "$1,398.60",
      "picture": "http://placehold.it/32x32",
      "name": "Medina Underwood"
    },
    {
      "_id": "5a66d6c3d727c450794226de",
      "index": 6,
      "balance": "$3,915.65",
      "picture": "http://placehold.it/32x32",
      "name": "Goldie Barber"
    }
  ];
  changeValue($event: any){
    console.log($event);
  }

}
