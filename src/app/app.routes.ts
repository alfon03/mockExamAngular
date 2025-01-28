import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { MainComponentComponent } from './main-component/main-component.component';

export const routes: Routes = [
    {path: 'projects', component: ProjectsComponent  },
    { path: 'projectsDetails/:id', component: ProjectDetailsComponent },
    { path: 'projects/:search', component: ProjectsComponent },
    { path: '', component: MainComponentComponent },
    { path: '**', component: PageNotFoundComponent },
];
