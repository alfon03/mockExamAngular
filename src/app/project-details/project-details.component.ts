import { Component, Input, OnInit } from '@angular/core';
import { ProjectsServerService } from '../server/projects-server.service';
import { ProjectsInterface } from '../interface/projects-interface';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-project-details',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent {

  constructor(private ProjectService: ProjectsServerService){};
  /*

  projects !: ProjectsInterface[];
  project !: ProjectsInterface|undefined;
  
  @Input('id') id?: string;


  ngOnInit(): void {
    console.log(this.id)
    this.ProjectService.getProjects().subscribe({next: projects => {
      this.projects = projects;
      this.project = this.projects.find(project => project.id == this.id);

    },
    error: error => console.log("Se ha producido un error", error)
  });
    
  }
  */
}
