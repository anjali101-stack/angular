import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchExample } from './switch-example';

describe('SwitchExample', () => {
  let component: SwitchExample;
  let fixture: ComponentFixture<SwitchExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
