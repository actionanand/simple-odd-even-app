import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple odd even app';
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onIntervalFired(numberFired: number){
   
    if(numberFired % 2 === 0){
      this.evenNumbers.push(numberFired);
    }
    else
    {
    this.oddNumbers.push(numberFired);
    }
  }
  
}
