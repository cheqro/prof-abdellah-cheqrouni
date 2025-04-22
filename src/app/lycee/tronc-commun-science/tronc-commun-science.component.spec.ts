import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroncCommunScienceComponent } from './tronc-commun-science.component';

describe('TroncCommunScienceComponent', () => {
  let component: TroncCommunScienceComponent;
  let fixture: ComponentFixture<TroncCommunScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TroncCommunScienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroncCommunScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
