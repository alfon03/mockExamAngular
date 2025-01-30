import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../service/project-service.service';
import { Project } from '../interface/project';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  imports:[CommonModule, FormsModule]
})
export class ProjectFormComponent implements OnInit {
  project: Project = { title: '', description: '', status: 'Nuevo' };
  isEditMode: boolean = false;
  projectId: number | null = null;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = Number(params.get('id'));
      if (this.projectId) {
        this.isEditMode = true;
        this.projectService.getProject(this.projectId).subscribe(data => {
          this.project = data.data;
        });
      }
    });
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.projectService.updateProject(this.projectId!, this.project).subscribe(() => {
        this.router.navigate(['/projects']);
      });
    } else {
      this.projectService.addProject(this.project).subscribe(() => {
        this.router.navigate(['/projects']);
      });
    }
  }
}
