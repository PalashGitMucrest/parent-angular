import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildReactComponent } from './child-react.component';

describe('ChildReactComponent', () => {
  let component: ChildReactComponent;
  let fixture: ComponentFixture<ChildReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
