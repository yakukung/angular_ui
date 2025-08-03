import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesComponent } from './movies';  // ✅ ชื่อ class ที่ถูกต้อง

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesComponent]  // ✅ เพราะใช้ Standalone component
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
