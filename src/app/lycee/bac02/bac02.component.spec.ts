import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bac02Component } from './bac02.component';

describe('Bac02Component', () => {
  let component: Bac02Component;
  let fixture: ComponentFixture<Bac02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bac02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bac02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
