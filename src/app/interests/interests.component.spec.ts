import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterestsComponent } from './interests.component';
import { By } from '@angular/platform-browser';

describe('InterestsComponent', () => {
  let component: InterestsComponent;
  let fixture: ComponentFixture<InterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Interests component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the interest items in the template', () => {
    const interestItems = fixture.debugElement.queryAll(By.css('li strong'));
    expect(interestItems.length).toBe(3);
    expect(interestItems[0].nativeElement.textContent).toBe('Superacion personal');
    expect(interestItems[1].nativeElement.textContent).toBe('Aprender nuevas tecnologias');
  });

  it('should display the header "Intereses"', () => {
    const header = fixture.debugElement.query(By.css('h3'));
    expect(header.nativeElement.textContent).toBe('Intereses');
  });
});
