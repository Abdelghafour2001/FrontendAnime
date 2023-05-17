import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeFeaturedComponent } from './anime-featured.component';

describe('AnimeFeaturedComponent', () => {
  let component: AnimeFeaturedComponent;
  let fixture: ComponentFixture<AnimeFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeFeaturedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
