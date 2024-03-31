import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    // Jest setup or mocks here if necessary
    component = new AppComponent();
    // Puedes mockear cualquier servicio o dependencia aquí
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});
