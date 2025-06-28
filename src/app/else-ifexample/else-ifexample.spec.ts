import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseIFExample } from './else-ifexample';

describe('ElseIFExample', () => {
  let component: ElseIFExample;
  let fixture: ComponentFixture<ElseIFExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElseIFExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElseIFExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
