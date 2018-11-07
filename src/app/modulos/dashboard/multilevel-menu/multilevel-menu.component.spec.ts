import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilevelMenuComponent } from './multilevel-menu.component';

describe('MultilevelMenuComponent', () => {
  let component: MultilevelMenuComponent;
  let fixture: ComponentFixture<MultilevelMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilevelMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilevelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
