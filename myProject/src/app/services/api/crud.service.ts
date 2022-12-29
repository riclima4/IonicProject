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
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  url: string = environment.api_url;

  constructor(private http: HttpClient) {}

  getHabAc(controller: string): Observable<ApiHabAc> {
    return this.http.get<ApiHabAc>(`${this.url}/api/${controller}`);
  }
  // getById(controller: string, id: string) {
  //   return this.http.get(`${this.url}/api/${controller}/${id}`);
  // }
  // create(controller: string, model: any) {
  //   return this.http.post(`${this.url}/api/${controller}/create`, model);
  // }
  // update(controller: string, model: any) {
  //   return this.http.post(`${this.url}/api/${controller}/update`, model);
  // }
  // delete(controller: string, id: string) {
  //   return this.http.post(`${this.url}/api/${controller}/delete`, { id: id });
  // }
}
