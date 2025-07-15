import { Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { ProjectsComponent } from './components/core/projects/projects.component';
import { TechSkillsComponent } from './components/core/tech-skills/tech-skills.component';
import { ExperienceComponent } from './components/core/experience/experience.component';
import { EducationComponent } from './components/core/education/education.component';
import { ContactComponent } from './components/core/contact/contact.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent, title: 'Home'},
    {path: 'Projects', component: ProjectsComponent, title: 'Projects'},
    {path: 'TechSkills', component: TechSkillsComponent, title: 'Technical Skills'},
    {path: 'Experience', component: ExperienceComponent, title: 'Experience'},
    {path: 'Education', component: EducationComponent, title: 'Education'},
    {path: 'Contact', component: ContactComponent, title: 'Contact'},
    {path: '**', component: NotFoundComponent, title: 'Not Found'}
];
