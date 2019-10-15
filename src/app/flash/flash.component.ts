import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flash } from '../flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent implements OnInit {
  @Input() flash: Flash;

  @Output() toggleCardEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleCard() {
    this.toggleCardEvent.emit(this.flash.id);
  }

}
