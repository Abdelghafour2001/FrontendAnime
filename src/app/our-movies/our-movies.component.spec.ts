import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMoviesComponent } from './our-movies.component';

describe('OurMoviesComponent', () => {
  let component: OurMoviesComponent;
  let fixture: ComponentFixture<OurMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
