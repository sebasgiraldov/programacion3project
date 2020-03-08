import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoliComponent } from './soli.component';

describe('SoliComponent', () => {
  let component: SoliComponent;
  let fixture: ComponentFixture<SoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
