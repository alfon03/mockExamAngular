import { Routes } from '@angular/router';
import { ProjectsComponent } from './project/project.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'projects', component: ProjectsComponent  },
  { path: 'projects/add', component: ProjectFormComponent },
  { path: 'projects/:id', component: ProjectFormComponent  },
  { path: '**', component: PageNotFoundComponent }
];
