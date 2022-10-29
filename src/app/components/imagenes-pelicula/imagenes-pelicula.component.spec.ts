import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesPeliculaComponent } from './imagenes-pelicula.component';

describe('ImagenesPeliculaComponent', () => {
  let component: ImagenesPeliculaComponent;
  let fixture: ComponentFixture<ImagenesPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenesPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
