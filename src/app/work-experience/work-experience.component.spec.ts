import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperienceComponent } from './work-experience.component';

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize workExperience array', () => {
    expect(component.workExperience.length).toBe(2);
    expect(component.workExperience[0].empresa).toBe('Laboratorio St rita');
    expect(component.workExperience[1].empresa).toBe('DT');
  });

  it('should have correct work experience details', () => {
    expect(component.workExperience[0].fecha).toBe('2021-2024');
    expect(component.workExperience[1].ubicacion).toBe('Orizaba, Ver.');
  });
});
