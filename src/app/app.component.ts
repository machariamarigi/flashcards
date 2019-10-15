import { Component } from '@angular/core';

import { Flash } from './flash.model';

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  editing = false;
  editingId: number;

  flashs: Flash[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      show: false,
      id: getRandomNumber(),
    }
  ];

  trackByFlashId(index, flash) {
    return flash.id;
  }

  handleToggleCard(id: number) {
    const toggledFlash = this.flashs.find(flash => flash.id === id);

    toggledFlash.show = !toggledFlash.show;
  }

  handleDelete(id: number) {
    const flashId = this.flashs.indexOf(this.flashs.find(flash => flash.id === id));
    this.flashs.splice(flashId, 1);
  }

  handleEdit(id: number) {
    this.editing = true;
    this.editingId = id;
    // TODO: Add editing logic
  }

  handleRememberChange({ id, flag }) {
    const selectedFlash = this.flashs.find(flash => flash.id === id);
    selectedFlash.remembered = flag;
  }
}
