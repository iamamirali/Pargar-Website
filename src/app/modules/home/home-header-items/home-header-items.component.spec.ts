import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderItemsComponent } from './home-header-items.component';

describe('HomeHeaderItemsComponent', () => {
  let component: HomeHeaderItemsComponent;
  let fixture: ComponentFixture<HomeHeaderItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeaderItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeaderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
