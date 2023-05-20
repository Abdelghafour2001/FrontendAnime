import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesGenresComponent } from './movies-genres.component';

describe('MoviesGenresComponent', () => {
  let component: MoviesGenresComponent;
  let fixture: ComponentFixture<MoviesGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesGenresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
