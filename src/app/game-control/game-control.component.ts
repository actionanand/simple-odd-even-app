import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output('intvFrd') intervalFired = new EventEmitter<number>();
  interval;
  firedNumber: number = 0;
  stopButton: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.stopButton = true;
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.firedNumber + 1);
      this.firedNumber++;
    },1000);
  }

  onPauseGame(){
    this.stopButton = false;
    clearInterval(this.interval);
  }

}
