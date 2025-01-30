import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  currentDateTime: string = '';
  totalProjects: number = 0;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    const date = new Date();
    this.currentDateTime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    this.projectService.getProjects().subscribe(data => {
      this.totalProjects = data.total;
    });
  }
}
