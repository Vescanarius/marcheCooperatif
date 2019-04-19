
import { Injectable } from '@angular/core';
import { Produit } from './produit';
import { PRODUITS } from './mock-produits';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap, } from 'rxjs/operators';


@Injectable()
export class ProduitsService {

    constructor (private http:HttpClient) {};
    private produitsUrl = 'api/produits';

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

    // Retourne le client avec l'identifiant passé en paramètre
    getProduit(id: number): Observable<Produit> {
        const url = `${this.produitsUrl}/${id}`;
          return this.http.get<Produit>(url).pipe(
          tap(_ => this.log (`fetched produit id=${id}`)),
          catchError(this.handleError<Produit>(`getProduit id=${id}`))
      );
    }

}
