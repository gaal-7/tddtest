import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { LenguagesComponent } from './lenguages/lenguages.component';
import { InterestsComponent } from './interests/interests.component';
import { ArchievementsComponent } from './archievements/archievements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    LenguagesComponent,
    InterestsComponent,
    ArchievementsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
