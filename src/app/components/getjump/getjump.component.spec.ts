import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetjumpComponent } from './getjump.component';

describe('GetjumpComponent', () => {
  let component: GetjumpComponent;
  let fixture: ComponentFixture<GetjumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetjumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetjumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
