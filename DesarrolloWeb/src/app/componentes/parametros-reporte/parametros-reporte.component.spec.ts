import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosReporteComponent } from './parametros-reporte.component';

describe('ParametrosReporteComponent', () => {
  let component: ParametrosReporteComponent;
  let fixture: ComponentFixture<ParametrosReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrosReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrosReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
