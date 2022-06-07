import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-commentbis',
  templateUrl: './commentbis.component.html',
  styleUrls: ['./commentbis.component.css'],
})
export class CommentbisComponent implements OnInit {
  commentFormBis = new FormGroup({
    nickname: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    comment: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
      nonNullable: true,
    }),
    rating: new FormControl('', {
      validators: [Validators.required, Validators.min(1), Validators.max(5)],
      nonNullable: true,
    }),
    showemail: new FormControl(false, {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  constructor() {}

  ngOnInit(): void {}

  handleFormSubmit() {
    console.log(this.commentFormBis.getRawValue());
  }
}
