import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  log: [] | any =[];
  showSecret=false;
  // log:number[]=[];
  onclick1(){
    this.showSecret=!this.showSecret;
    //this.log.push(this.log.length + 1)
    //this.log.push(this.log.length + 1)
    this.log.push(new Date());
   console.log(new Date())
  }
}
