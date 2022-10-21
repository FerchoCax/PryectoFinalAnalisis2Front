import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorcodigoQrComponent } from './lectorcodigo-qr.component';

describe('LectorcodigoQrComponent', () => {
  let component: LectorcodigoQrComponent;
  let fixture: ComponentFixture<LectorcodigoQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectorcodigoQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectorcodigoQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
