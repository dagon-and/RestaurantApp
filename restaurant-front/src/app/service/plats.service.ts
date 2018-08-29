import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {
  plats: Observable<Plat[]>;

  constructor(private http: HttpClient) { }

  getPlats(): Observable<Plat[]> {
    return this.plats = this.http.get<Plat[]>("http://localhost:9090/Plats");
  }

  getPlatByID(id: string): Observable<Plat> {
    return this.http.get<Plat>("http://localhost:9090/Plats/" + id);
  }

  postPlat(plat: Plat): Observable<Plat> {
    return this.http.post<Plat>("http://localhost:9090/Plats", plat);
  }

}

export interface Plat {
  id: number;
  nom:string;
  description: string;
  prix: number;
}
