import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VMenuBarComponent } from './v-menu-bar.component';

describe('VMenuBarComponent', () => {
  let component: VMenuBarComponent;
  let fixture: ComponentFixture<VMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
