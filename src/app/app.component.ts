import { Component } from '@angular/core';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  obj = {prompt:null, size:"small"}
   DataInput:any = [];
   imageUrl = "";
  title = 'learnOpenAI';
  constructor(private genservice:HttpService){

  }


  send(){
    console.log(this.obj)

    this.genservice.generateImage(this.obj).subscribe(data =>{
      this.DataInput = data;
      this.imageUrl =  this.DataInput.data
    });
  }
}
