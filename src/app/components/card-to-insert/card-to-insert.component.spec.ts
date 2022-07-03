import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardToInsertComponent } from './card-to-insert.component';

describe('CardToInsertComponent', () => {
  let component: CardToInsertComponent;
  let fixture: ComponentFixture<CardToInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardToInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardToInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
