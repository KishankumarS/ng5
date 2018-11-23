import { Component, OnInit  } from '@angular/core';
import {NewService} from '../new.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  message:string;
  goals =[];
  constructor( private _new: NewService) { }

  ngOnInit() {
    this._new.goal.subscribe(res => this.goals = res);
    this._new.changeGoal(this.goals);
  }
  removeItem(i){
    this.goals.splice(i, 1);
  }
}
