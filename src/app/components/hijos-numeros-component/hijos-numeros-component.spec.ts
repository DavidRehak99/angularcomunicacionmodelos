import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijosNumerosComponent } from './hijos-numeros-component';

describe('HijosNumerosComponent', () => {
  let component: HijosNumerosComponent;
  let fixture: ComponentFixture<HijosNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijosNumerosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijosNumerosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
