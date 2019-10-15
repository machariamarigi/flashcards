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
  @Output() deleteFlashEvent = new EventEmitter();
  @Output() editFlashEvent = new EventEmitter();
  @Output() rememberChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleCard() {
    this.toggleCardEvent.emit(this.flash.id);
  }

  deleteFlash() {
    this.deleteFlashEvent.emit(this.flash.id);
  }

  editFlash() {
    this.editFlashEvent.emit(this.flash.id);
  }

  markCorrect() {
    this.rememberChangeEvent.emit({
      id: this.flash.id,
      flag: 'correct'
    });
  }

  markIncorrect() {
    this.rememberChangeEvent.emit({
      id: this.flash.id,
      flag: 'incorrect'
    });
  }

}
