import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchievementsComponent } from './archievements.component';

describe('ArchievementsComponent', () => {
  let component: ArchievementsComponent;
  let fixture: ComponentFixture<ArchievementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchievementsComponent]
    });
    fixture = TestBed.createComponent(ArchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
