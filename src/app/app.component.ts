import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


interface UserResponse{
  name:string,
  applicationId:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private http:HttpClient){

  }
  ngOnInit():void{
    this.http.get<UserResponse>('https://api-feedback-service.dev.spec.honeywell.com/apps')
    .subscribe(
      data => { 
        hello.dont(data);
      }
    )
  }
}


class hello{

 static dont(data):void{

        for (let val of Object(data)) {
        console.log("H-H:  "+val.name);
      }

  }
}
