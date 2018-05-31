import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numberGenerated = new EventEmitter<number>();
  incrementingNumber :number = 0;
  startInterval: any;
  constructor() { }

  ngOnInit() {
  }

  onCounterBegin(){
    this.incrementingNumber++;
    this.numberGenerated.emit(this.incrementingNumber);
  }
  onStartGame() {
    this.startInterval = setInterval(()=>{
      this.numberGenerated.emit(this.incrementingNumber);
      this.incrementingNumber++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.startInterval);
  }

}
