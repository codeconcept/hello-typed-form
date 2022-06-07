import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  commentForm = this.fb.nonNullable.group({
    nickname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', [Validators.required, Validators.minLength(3)]],
    rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
    showemail: [false, [Validators.required]],
    enableemail: [true],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    /*  
    return type is  Observable<Partial<{
      nickname: string;
      email: string;
      comment: string;
      rating: number;
      showemail: boolean;
  } 
  */
    this.commentForm.valueChanges.subscribe((formValue) => {
      console.log(formValue);
    });

    this.commentForm.get('enableemail')!.valueChanges.subscribe((showemail) => {
      if (showemail) {
        this.commentForm.get('email')!.enable();
      } else {
        this.commentForm.get('email')!.disable();
      }
    });
  }

  handleFormSubmit() {
    console.log(this.commentForm.getRawValue());
  }
}
