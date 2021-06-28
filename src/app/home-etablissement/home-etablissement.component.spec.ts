import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEtablissementComponent } from './home-etablissement.component';

describe('HomeEtablissementComponent', () => {
  let component: HomeEtablissementComponent;
  let fixture: ComponentFixture<HomeEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
