import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComopnent } from './navbar-comopnent';

describe('NavbarComopnent', () => {
  let component: NavbarComopnent;
  let fixture: ComponentFixture<NavbarComopnent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComopnent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComopnent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
