import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexTabComponent } from './flex-tab.component';

describe('FlexTabComponent', () => {
  let component: FlexTabComponent;
  let fixture: ComponentFixture<FlexTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
