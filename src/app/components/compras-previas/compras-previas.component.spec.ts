import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasPreviasComponent } from './compras-previas.component';

describe('ComprasPreviasComponent', () => {
  let component: ComprasPreviasComponent;
  let fixture: ComponentFixture<ComprasPreviasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasPreviasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasPreviasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
