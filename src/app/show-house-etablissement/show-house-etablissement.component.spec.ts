import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHouseEtablissementComponent } from './show-house-etablissement.component';

describe('ShowHouseEtablissementComponent', () => {
  let component: ShowHouseEtablissementComponent;
  let fixture: ComponentFixture<ShowHouseEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHouseEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHouseEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
