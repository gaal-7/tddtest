import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { By } from '@angular/platform-browser';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Skills component', () => {
    expect(component).toBeTruthy();
  });
  
    it('should render the language items in the template', () => {
    const languageItems = fixture.debugElement.queryAll(By.css('li'));
    expect(languageItems.length).toBe(7); // 3 languages + 4 projects
    expect(languageItems[0].nativeElement.textContent).toBe('c++');
    expect(languageItems[1].nativeElement.textContent).toBe('java');
    expect(languageItems[2].nativeElement.textContent).toBe('python');
    expect(languageItems[3].nativeElement.textContent).toBe('cv');
    expect(languageItems[4].nativeElement.textContent).toBe('cruds');
    expect(languageItems[5].nativeElement.textContent).toBe('gym app');
    expect(languageItems[6].nativeElement.textContent).toBe('punto de venta');
  });

  it('should display the header "Habilidades"', () => {
    const header = fixture.debugElement.query(By.css('h3'));
    expect(header.nativeElement.textContent).toBe('Habilidades');
  });

  it('should display the correct section titles', () => {
    const sectionTitles = fixture.debugElement.queryAll(By.css('strong'));
    expect(sectionTitles[0].nativeElement.textContent).toContain('Lenguajes dominados:');
    expect(sectionTitles[1].nativeElement.textContent).toContain('Proyectos realizados:');
    expect(sectionTitles[2].nativeElement.textContent).toContain('Habilidades para trabajar en equipo');
  });
});
