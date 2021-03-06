import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurjumpsComponent } from './ourjumps.component';

describe('OurjumpsComponent', () => {
  let component: OurjumpsComponent;
  let fixture: ComponentFixture<OurjumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurjumpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurjumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
