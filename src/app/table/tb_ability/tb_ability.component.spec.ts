import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAbilityComponent } from './tb_ability.component';

describe('AbilityComponent', () => {
  let component: TableAbilityComponent;
  let fixture: ComponentFixture<TableAbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAbilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
