import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHouseEtablissementComponent } from './edit-house-etablissement.component';

describe('EditHouseEtablissementComponent', () => {
  let component: EditHouseEtablissementComponent;
  let fixture: ComponentFixture<EditHouseEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHouseEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHouseEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
