import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  tex:string = '';
  login:string='';
  constructor(private http: HttpClient) {}
  model:string = '';
  time:Date = new Date();
  ngOnInit():void{
    this.http.get('your API url')
    .subscribe(
      data => {
        for(let j of Object(data)){
          this.tex =j.name;
          console.log("Name: "+j.name);
        }
    },(err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Client-side error");
      }
      else{
        console.log("Servevr-side error");
      }
    }
  )

  const reqPost = this.http.post('https://jsonplaceholder.typicode.com/posts',{
    title: 'OneTwo',
    boday: 'Holebay',
    userId: 12
  }).subscribe(
    res => {
      console.log(res);
    },
    err =>{
      console.log("Error Occured");
    }
  )
}
}
