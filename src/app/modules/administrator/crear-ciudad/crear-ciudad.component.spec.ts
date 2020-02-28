import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCiudadComponent } from './crear-ciudad.component';

describe('CrearCiudadComponent', () => {
  let component: CrearCiudadComponent;
  let fixture: ComponentFixture<CrearCiudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCiudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
