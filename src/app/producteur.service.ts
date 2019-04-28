
import { Injectable } from '@angular/core';
import { Producteur } from './producteur';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap, } from 'rxjs/operators';


@Injectable()
export class ProducteurService {

    constructor (private http:HttpClient) {};
    private producteursUrl = 'api/producteurs';

    private log(log:string){
        console.info(log);
    }
    private handleError<T>(operation='operation', result?: T){
        return(error:any):Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);

            return of (result as T);
        }
    }

    // Retourne le producteur avec l'identifiant passé en paramètre
    getProducteur(id: number): Observable<Producteur> {
        const url = `${this.producteursUrl}/${id}`;
          return this.http.get<Producteur>(url).pipe(
          tap(_ => this.log (`fetched client id=${id}`)),
          catchError(this.handleError<Producteur>(`getProducteur id=${id}`))
      );
    }
     // Retourne tous les producteurs 
     getProducteurs(): Observable<Producteur> {
        const tousProducteursUrl = `${this.producteursUrl}`;
          return this.http.get<Producteur>(tousProducteursUrl).pipe(
          tap(_ => this.log (`fetched Producteurs`)),
          catchError(this.handleError<Producteur>(`getProducteurs`))
      );
    }

}
