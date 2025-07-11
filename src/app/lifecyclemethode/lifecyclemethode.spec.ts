import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecyclemethode } from './lifecyclemethode';

describe('Lifecyclemethode', () => {
  let component: Lifecyclemethode;
  let fixture: ComponentFixture<Lifecyclemethode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lifecyclemethode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lifecyclemethode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
