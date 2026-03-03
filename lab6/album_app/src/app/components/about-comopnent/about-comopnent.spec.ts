import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComopnent } from './about-comopnent';

describe('AboutComopnent', () => {
  let component: AboutComopnent;
  let fixture: ComponentFixture<AboutComopnent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComopnent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComopnent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
