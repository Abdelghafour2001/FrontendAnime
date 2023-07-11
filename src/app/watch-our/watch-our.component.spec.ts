import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchOurComponent } from './watch-our.component';

describe('WatchOurComponent', () => {
  let component: WatchOurComponent;
  let fixture: ComponentFixture<WatchOurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchOurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchOurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
