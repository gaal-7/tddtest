import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';
import { By } from '@angular/platform-browser';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Education component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the header "Educación"', () => {
    const header = fixture.debugElement.query(By.css('h3'));
    expect(header.nativeElement.textContent).toBe('Educación');
  });
});
