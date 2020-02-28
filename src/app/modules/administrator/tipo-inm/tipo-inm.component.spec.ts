import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoInmComponent } from './tipo-inm.component';

describe('TipoInmComponent', () => {
  let component: TipoInmComponent;
  let fixture: ComponentFixture<TipoInmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoInmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoInmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
