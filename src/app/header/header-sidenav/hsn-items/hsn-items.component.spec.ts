import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsnItemsComponent } from './hsn-items.component';

describe('HsnItemsComponent', () => {
  let component: HsnItemsComponent;
  let fixture: ComponentFixture<HsnItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsnItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HsnItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
