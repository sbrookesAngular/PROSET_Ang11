import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterTabsComponent } from './adapter-tabs.component';

describe('AdapterTabsComponent', () => {
  let component: AdapterTabsComponent;
  let fixture: ComponentFixture<AdapterTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdapterTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
