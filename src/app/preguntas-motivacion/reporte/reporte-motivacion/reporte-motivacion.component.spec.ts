import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteMotivacionComponent } from './reporte-motivacion.component';

describe('ReporteMotivacionComponent', () => {
  let component: ReporteMotivacionComponent;
  let fixture: ComponentFixture<ReporteMotivacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteMotivacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteMotivacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
