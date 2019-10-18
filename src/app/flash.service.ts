import { Injectable } from '@angular/core';

import { Flash } from './flash.model';

function getRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root'
})
export class FlashService {
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

  addFlash(flash) {
    this.flashs.push({
      ...flash,
      show: false,
      id: getRandomNumber()
    });
  }

  toggleFlash(id: number) {
    const selectedFlash = this.flashs.find(flash => flash.id === id);
    selectedFlash.show = !selectedFlash.show;
  }

  deleteFlash(id) {
    const index = this.flashs.findIndex(flash => flash.id === id);
    this.flashs.splice(index, 1);
  }

  rememberedChange(id: number, flag) {
    const selectedFlash = this.flashs.find(flash => flash.id === id);
    selectedFlash.remembered = flag;
  }

  updateFlash(id: number, updatedFlash: Partial<Flash>) {
    const selectedFlash = this.flashs.find(flash => flash.id === id);
    selectedFlash.question = updatedFlash.question;
    selectedFlash.answer = updatedFlash.answer;
  }

  getFlash(id: number) {
    const selectedFlash = this.flashs.find(flash => flash.id === id);
    return selectedFlash;
  }

  constructor() { }
}
