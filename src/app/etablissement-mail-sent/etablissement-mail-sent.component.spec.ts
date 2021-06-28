import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementMailSentComponent } from './etablissement-mail-sent.component';

describe('EtablissementMailSentComponent', () => {
  let component: EtablissementMailSentComponent;
  let fixture: ComponentFixture<EtablissementMailSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtablissementMailSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablissementMailSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
