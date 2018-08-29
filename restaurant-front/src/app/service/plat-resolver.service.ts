import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { PlatsService } from './plats.service';
import { Observable, of } from 'rxjs';
import { first, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlatResolver {

  constructor(private plat: PlatsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let id = route.paramMap.get("id");

    return this.plat.getPlatByID(id).pipe(
      first(),
      catchError(error => {
        this.router.navigateByUrl("/");
        return of(null);
      })
    );
  }
}
