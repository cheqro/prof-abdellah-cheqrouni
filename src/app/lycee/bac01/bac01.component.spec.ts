import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bac01Component } from './bac01.component';

describe('Bac01Component', () => {
  let component: Bac01Component;
  let fixture: ComponentFixture<Bac01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bac01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bac01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
