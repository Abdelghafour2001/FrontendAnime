import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSubsTypesComponent } from './sidebar-subs-types.component';

describe('SidebarSubsTypesComponent', () => {
  let component: SidebarSubsTypesComponent;
  let fixture: ComponentFixture<SidebarSubsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSubsTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSubsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
