import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHostbindingComponent } from './component-hostbinding.component';

describe('ComponentHostbindingComponent', () => {
  let component: ComponentHostbindingComponent;
  let fixture: ComponentFixture<ComponentHostbindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentHostbindingComponent]
    });
    fixture = TestBed.createComponent(ComponentHostbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
