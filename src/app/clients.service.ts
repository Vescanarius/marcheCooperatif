
import { Injectable } from '@angular/core';
import { Client } from './client';
//import { CLIENTS } from './mock-clients';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap} from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ClientsService {

    constructor (private http:HttpClient) {};
    private clientsUrl = 'api/clients';

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
    getClient(id: number): Observable<Client> {
        const url = `${this.clientsUrl}/${id}`;
      return this.http.get<Clients>(url).pipe(
          tap(_ => this.log (`fetched client id=${id}`)),
          catchError(this.handleError<Client>(`getClient id=${id}`))
      );
    }

}
