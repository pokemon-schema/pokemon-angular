import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorePanelComponent } from './core-panel.component';

describe('CorePanelComponent', () => {
  let component: CorePanelComponent;
  let fixture: ComponentFixture<CorePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
