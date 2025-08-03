import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailperson } from './detailperson';

describe('Detailperson', () => {
  let component: Detailperson;
  let fixture: ComponentFixture<Detailperson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detailperson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detailperson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
