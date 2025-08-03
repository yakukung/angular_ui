import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailmovie } from './detailmovie';

describe('Detailmovie', () => {
  let component: Detailmovie;
  let fixture: ComponentFixture<Detailmovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detailmovie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detailmovie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
