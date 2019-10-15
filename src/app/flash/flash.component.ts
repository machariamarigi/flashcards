import { Component, OnInit, Input } from '@angular/core';
import { Flash } from '../flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent implements OnInit {
  @Input() flash: Flash = {
    id: 1,
    question: 'React to Angular',
    answer: 'No reaction ;)',
    show: false
  };

  constructor() { }

  ngOnInit() {
  }

}
