import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaInmueblesComponent } from './grafica-inmuebles.component';

describe('GraficaInmueblesComponent', () => {
  let component: GraficaInmueblesComponent;
  let fixture: ComponentFixture<GraficaInmueblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaInmueblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
