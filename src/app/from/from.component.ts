import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

itemCount: number;
btnTxt: string = "Add an Item";
goalText: string = "Example goal";
goals =[];

  constructor() { }

  ngOnInit() {
      this.itemCount = this.goals.length;
  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText ='';
    this.itemCount= this.goals.length;
  }
  removeItem(i){
    this.goals.splice(i, 1);
  }

}
