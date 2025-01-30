import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interface/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getProject(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addProject(project: Project): Observable<any> {
    return this.http.post<any>(this.apiUrl, project);
  }

  updateProject(id: number, project: Project): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, project);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  searchProjects(term: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?search=${term}`);
  }
}
