import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListasProductosComponent } from './listas-productos-component';

describe('ListasProductosComponent', () => {
  let component: ListasProductosComponent;
  let fixture: ComponentFixture<ListasProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListasProductosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListasProductosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
