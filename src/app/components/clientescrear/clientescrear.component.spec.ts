import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientescrearComponent } from './clientescrear.component';

describe('ClientescrearComponent', () => {
  let component: ClientescrearComponent;
  let fixture: ComponentFixture<ClientescrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientescrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientescrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
