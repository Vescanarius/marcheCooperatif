import { Injectable } from '@angular/core';
import { Panier } from './panier';
import { PANIERS } from './mock-panier';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, } from 'rxjs/operators';


@Injectable()
export class PanierService {

    constructor(private http: HttpClient) { };
    private panierUrl = 'api/paniers';

    private log(log: string) {
        console.info(log);
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        }
    }

    // Retourne le client avec l'identifiant passé en paramètre
    getPanier(id: number): Observable<Panier> {
        let url = `${this.panierUrl}/${id}`;
        return this.http.get<Panier>(url).pipe(
            tap(_ => this.log(`fetched panier id=${id}`)),
            catchError(this.handleError<Panier>(`getPanier id=${id}`))
        );
    }

}
