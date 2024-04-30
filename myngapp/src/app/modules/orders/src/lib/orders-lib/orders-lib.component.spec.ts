import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersLibComponent } from './orders-lib.component';

describe('OrdersLibComponent', () => {
  let component: OrdersLibComponent;
  let fixture: ComponentFixture<OrdersLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
