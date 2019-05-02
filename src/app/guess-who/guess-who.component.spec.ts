import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessWhoComponent } from './guess-who.component';

describe('GuessWhoComponent', () => {
  let component: GuessWhoComponent;
  let fixture: ComponentFixture<GuessWhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessWhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessWhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
