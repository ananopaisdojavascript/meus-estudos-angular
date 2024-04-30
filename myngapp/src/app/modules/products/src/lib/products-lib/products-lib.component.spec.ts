import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsLibComponent } from './products-lib.component';

describe('ProductsLibComponent', () => {
  let component: ProductsLibComponent;
  let fixture: ComponentFixture<ProductsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
