import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterExample } from './router-example';

describe('RouterExample', () => {
  let component: RouterExample;
  let fixture: ComponentFixture<RouterExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
