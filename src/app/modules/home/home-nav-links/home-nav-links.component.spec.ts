import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavLinksComponent } from './home-nav-links.component';

describe('HomeNavLinksComponent', () => {
  let component: HomeNavLinksComponent;
  let fixture: ComponentFixture<HomeNavLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNavLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
