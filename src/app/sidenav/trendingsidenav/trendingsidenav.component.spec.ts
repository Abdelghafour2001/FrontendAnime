import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingsidenavComponent } from './trendingsidenav.component';

describe('TrendingsidenavComponent', () => {
  let component: TrendingsidenavComponent;
  let fixture: ComponentFixture<TrendingsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingsidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
