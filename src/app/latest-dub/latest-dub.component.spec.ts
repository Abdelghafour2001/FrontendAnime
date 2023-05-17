import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestDubComponent } from './latest-dub.component';

describe('LatestDubComponent', () => {
  let component: LatestDubComponent;
  let fixture: ComponentFixture<LatestDubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestDubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestDubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
