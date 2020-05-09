import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public num1:number;
  public num2:number;
  public num3:number[] = [];

  find(){
    for(let i = this.num1; i<=this.num2; i++){
      if(i%2 == 0){
        this.num3.push(i);
      }
    }
  }
}
