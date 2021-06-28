import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHouseComponent } from './search-house.component';

describe('SearchHouseComponent', () => {
  let component: SearchHouseComponent;
  let fixture: ComponentFixture<SearchHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
