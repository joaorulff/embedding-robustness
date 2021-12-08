import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockChartComponent } from './mock-chart.component';

describe('MockChartComponent', () => {
  let component: MockChartComponent;
  let fixture: ComponentFixture<MockChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
