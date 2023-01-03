import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiHabAc {
  habA: [id: number, titulo: string, desc: string];
}
export interface ApiHabPr {
  habP: [id: number, titulo: string, desc: string, nivel: number];
}
export interface ApiIdiomas {
  idiomas: [id: number, idioma: string, nivel: number];
}
export interface ApiProjects {
  projetos: [id: number, titulo: string, desc: string];
}
export interface ApiProgrammingLang {
  progLang: [id: number, nome: string, image: string];
}
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  url: string = environment.api_url;

  constructor(private http: HttpClient) {}

  getHabAc(controller: string): Observable<ApiHabAc> {
    return this.http.get<ApiHabAc>(`${this.url}/api/${controller}`);
  }
  getHabPr(controller: string): Observable<ApiHabPr> {
    return this.http.get<ApiHabPr>(`${this.url}/api/${controller}`);
  }
  getIdiomas(controller: string): Observable<ApiIdiomas> {
    return this.http.get<ApiIdiomas>(`${this.url}/api/${controller}`);
  }
  getProjects(controller: string): Observable<ApiProjects> {
    return this.http.get<ApiProjects>(`${this.url}/api/${controller}`);
  }
  getProgrammingLang(controller: string): Observable<ApiProgrammingLang> {
    return this.http.get<ApiProgrammingLang>(`${this.url}/api/${controller}`);
  }
  create(controller: string, model: any) {
    return this.http.post(`${this.url}/api/${controller}`, model);
  }
  // update(controller: string, model: any) {
  //   return this.http.post(`${this.url}/api/${controller}/update`, model);
  // }
  // delete(controller: string, id: string) {
  //   return this.http.post(`${this.url}/api/${controller}/delete`, { id: id });
  // }
}
