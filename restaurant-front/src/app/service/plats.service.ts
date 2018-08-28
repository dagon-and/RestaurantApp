import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {
  plats: Observable<Plat[]>;

  constructor(private http: HttpClient) { }

  onInit(): void {
    this.plats = this.http.get<Plat[]>("http://localhost:9090/Plats");
  }

  getPlats(): Observable<Plat[]> {
    return this.http.get<Plat[]>("http://localhost:9090/Plats");
  }

  getPlatByID(id: number): Observable<Plat[]> {
    return this.http.get<Plat[]>("http://localhost:9090/Plats/" + id);
  }

}

export interface Plat {
  id: number;
  nom:string;
  description: string;
  prix: number;
}
