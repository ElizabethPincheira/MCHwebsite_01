import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pedir } from './pedir';

describe('Pedir', () => {
  let component: Pedir;
  let fixture: ComponentFixture<Pedir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pedir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pedir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
