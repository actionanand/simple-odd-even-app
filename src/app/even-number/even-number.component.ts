import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-number',
  templateUrl: './even-number.component.html',
  styleUrls: ['./even-number.component.scss']
})
export class EvenNumberComponent implements OnInit {
  @Input('nmbr') number: number;

  constructor() { }

  ngOnInit() {
  }

}
