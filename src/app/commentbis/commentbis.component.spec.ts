import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentbisComponent } from './commentbis.component';

describe('CommentbisComponent', () => {
  let component: CommentbisComponent;
  let fixture: ComponentFixture<CommentbisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentbisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentbisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
