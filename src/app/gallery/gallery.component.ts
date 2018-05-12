import { Component, OnInit  } from '@angular/core';
import {NewService} from '../new.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FromService } from '../from.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  message:string;
  goals =[];
  constructor( private _new: NewService, private _from:FromService) { }

  ngOnInit() {
    this._new.goal.subscribe(res => this.goals = res);
    this._new.changeGoal(this.goals);
    this._from.currentMessage.subscribe(message=> this.message = message);
  }
  

}
