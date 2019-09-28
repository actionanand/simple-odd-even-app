import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-odd-number',
  templateUrl: './odd-number.component.html',
  styleUrls: ['./odd-number.component.scss']
})
export class OddNumberComponent implements OnInit {

  @Input('nmbr') number: number;

  constructor() { }

  ngOnInit() {
  }

}
