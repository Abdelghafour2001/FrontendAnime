import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSubComponent } from './latest-sub.component';

describe('LatestSubComponent', () => {
  let component: LatestSubComponent;
  let fixture: ComponentFixture<LatestSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
