import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventExamples } from './event-examples';

describe('EventExamples', () => {
  let component: EventExamples;
  let fixture: ComponentFixture<EventExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventExamples]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventExamples);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
