import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFechaComponent } from './detalle-fecha.component';

describe('DetalleFechaComponent', () => {
  let component: DetalleFechaComponent;
  let fixture: ComponentFixture<DetalleFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
