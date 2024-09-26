import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LenguagesComponent } from './lenguages.component';
import { By } from '@angular/platform-browser';

describe('LanguagesComponent', () => {
  let component: LenguagesComponent;
  let fixture: ComponentFixture<LenguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Languages component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the language items in the template', () => {
    const languageItems = fixture.debugElement.queryAll(By.css('li strong'));
    expect(languageItems.length).toBe(2);
    expect(languageItems[0].nativeElement.textContent).toBe('Español');
    expect(languageItems[1].nativeElement.textContent).toBe('Ingles');
  });

  it('should display the header "Lenguajes"', () => {
    const header = fixture.debugElement.query(By.css('h3'));
    expect(header.nativeElement.textContent).toBe('Lenguajes');
  });
});
