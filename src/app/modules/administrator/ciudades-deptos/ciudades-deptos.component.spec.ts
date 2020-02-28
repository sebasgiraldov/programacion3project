import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesDeptosComponent } from './ciudades-deptos.component';

describe('CiudadesDeptosComponent', () => {
  let component: CiudadesDeptosComponent;
  let fixture: ComponentFixture<CiudadesDeptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadesDeptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesDeptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
