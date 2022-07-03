import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpHolderComponent } from './cmp-holder.component';

describe('CmpHolderComponent', () => {
  let component: CmpHolderComponent;
  let fixture: ComponentFixture<CmpHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
