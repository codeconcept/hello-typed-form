import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  commentForm = this.fb.group({
    nickname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', [Validators.required, Validators.minLength(3)]],
    rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
    showemail: [false, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {}

  handleFormSubmit() {
    console.log(this.commentForm.getRawValue());
  }
}
