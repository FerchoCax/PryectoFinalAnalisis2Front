import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionDeBoletosComponent } from './validacion-de-boletos.component';

describe('ValidacionDeBoletosComponent', () => {
  let component: ValidacionDeBoletosComponent;
  let fixture: ComponentFixture<ValidacionDeBoletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacionDeBoletosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionDeBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
