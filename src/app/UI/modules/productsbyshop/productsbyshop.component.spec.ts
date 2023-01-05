import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsbyshopComponent } from './productsbyshop.component';

describe('ProductsbyshopComponent', () => {
  let component: ProductsbyshopComponent;
  let fixture: ComponentFixture<ProductsbyshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsbyshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsbyshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
