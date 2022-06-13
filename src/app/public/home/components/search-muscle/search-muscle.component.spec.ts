import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMuscleComponent } from './search-muscle.component';

describe('SearchMuscleComponent', () => {
  let component: SearchMuscleComponent;
  let fixture: ComponentFixture<SearchMuscleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMuscleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
