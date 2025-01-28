import { Component, OnInit } from '@angular/core';
import { ProjectsServerService } from '../server/projects-server.service';
import { ProjectsInterface } from '../interface/projects-interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  imports:[FormsModule, CommonModule, RouterOutlet, RouterLink]
})
export class ProjectsComponent implements OnInit {

  projects!: ProjectsInterface[];
  displayProjects!: ProjectsInterface[];
  searchQuery: string = '';  // Añadido para la búsqueda

  constructor(private projectsService: ProjectsServerService) { }

  ngOnInit(): void {
    this.projectsService.getProjects()
      .subscribe({
        next: (projects) => {
          this.projects = projects;
          this.displayProjects = projects; 
        },
        error: (error) => console.log("Se ha producido un error", error)
      });
  }

  filterProjects(): void {
    if (!this.searchQuery) {
      this.displayProjects = this.projects; 
    } else {
      this.displayProjects = this.projects.filter(project => 
        project.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        project.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
