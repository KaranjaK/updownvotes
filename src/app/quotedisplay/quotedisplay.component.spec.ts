import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotedisplayComponent } from './quotedisplay.component';

describe('QuotedisplayComponent', () => {
  let component: QuotedisplayComponent;
  let fixture: ComponentFixture<QuotedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotedisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
