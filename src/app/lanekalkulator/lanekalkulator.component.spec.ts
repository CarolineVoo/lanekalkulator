import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanekalkulatorComponent } from './lanekalkulator.component';

describe('LanekalkulatorComponent', () => {
  let component: LanekalkulatorComponent;
  let fixture: ComponentFixture<LanekalkulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanekalkulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanekalkulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
