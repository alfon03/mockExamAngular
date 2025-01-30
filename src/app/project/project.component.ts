import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project-service.service';
import { Project } from '../interface/project';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './project.component.html',
  imports: [CommonModule, FormsModule, RouterLink]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  searchTerm: string = '';

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data.data.filter((project: Project) => project.id !== undefined);  // Filtra los proyectos con id válido
    });
  }

  onDelete(id: number): void {
    if (id <= 0) return;  // Verifica que el ID sea un número válido
  
    if (confirm('¿Estás seguro de eliminar este proyecto?')) {
      this.projectService.deleteProject(id).subscribe(() => {
        this.getProjects(); // Actualiza la lista después de eliminar
      });
    }
  }
  
  onEdit(id: number): void {
    if (id <= 0) return;  // Verifica que el ID sea un número válido
  
    this.router.navigate([`/projects/${id}`]);
  }
  

  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.getProjects();  // Si no hay término de búsqueda, recarga todos los proyectos
    } else {
      this.projects = this.projects.filter((project: Project) => 
        project.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        project.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  
}
