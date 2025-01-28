import { Injectable } from '@angular/core';
import { ProjectsInterface } from '../interface/projects-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectsServerService {


  private url: string = "http://localhost:3000/projects";

  constructor(private httpClient: HttpClient) { }


  getProjects(): Observable<ProjectsInterface[]> {
    return this.httpClient.get<ProjectsInterface[]>(this.url);
  }
}
