import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecouvrirPlusComponent } from './decouvrir-plus.component';

describe('DecouvrirPlusComponent', () => {
  let component: DecouvrirPlusComponent;
  let fixture: ComponentFixture<DecouvrirPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecouvrirPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecouvrirPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
