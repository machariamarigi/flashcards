import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { Flash } from './flash.model';
import { FlashService } from './flash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('flashForm', {static: true}) flashForm: NgForm;
  flashs$: Observable<Flash[]>;
  editing = false;
  editingId: number;
  flash = {
    question: '',
    answer: ''
  };


  constructor(private flashService: FlashService) {}

  ngOnInit(): void {
    this.flashs$ = this.flashService.flashs$;
  }

  trackByFlashId(index, flash) {
    return flash.id;
  }

  handleToggleCard(id: number) {
    this.flashService.toggleFlash(id);
  }

  handleDelete(id: number) {
    this.flashService.deleteFlash(id);
  }

  handleEdit(id: number) {
    this.flashService.getFlash(id);
    this.editing = true;
    this.editingId = id;
  }

  handleRememberChange({ id, flag }) {
    this.flashService.rememberedChange(id, flag);
  }

  handleSubmit(): void {
    this.flashService.addFlash(this.flash);
    this.handleClear();
  }

  handleClear() {
    this.flash = {
      question: '',
      answer: ''
    };
    this.flashForm.reset();
  }

  handleUpdate() {
    this.flashService.updateFlash(this.editingId, this.flash);
    this.handleCancel();
  }

  handleCancel() {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear();
  }
}
