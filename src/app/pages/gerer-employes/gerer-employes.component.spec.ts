import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererEmployesComponent } from './gerer-employes.component';

describe('GererEmployesComponent', () => {
  let component: GererEmployesComponent;
  let fixture: ComponentFixture<GererEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererEmployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
