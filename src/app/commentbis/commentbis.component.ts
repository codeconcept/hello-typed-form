import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-commentbis',
  templateUrl: './commentbis.component.html',
  styleUrls: ['./commentbis.component.css'],
})
export class CommentbisComponent implements OnInit {
  commentFormBis = new FormGroup({
    nickname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comment: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    rating: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    showemail: new FormControl(false, Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  handleFormSubmit() {
    console.log(this.commentFormBis.getRawValue());
  }
}
