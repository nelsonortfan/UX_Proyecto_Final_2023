import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoResumenComponent } from './historico-resumen.component';

describe('HistoricoResumenComponent', () => {
  let component: HistoricoResumenComponent;
  let fixture: ComponentFixture<HistoricoResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoResumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
