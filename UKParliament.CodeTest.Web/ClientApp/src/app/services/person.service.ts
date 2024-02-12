import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PersonViewModel } from '../models/person-view-model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private endpointUrl = 'api/person';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  // Below is some sample code to help get you started calling the API
  getById(id: number): Observable<PersonViewModel> {
    return this.http.get<PersonViewModel>(this.baseUrl + `${this.endpointUrl}/${id}`)
  }

  // GET persons
  getPersons(): Observable<PersonViewModel[]> {
    return this.http.get<PersonViewModel[]>(this.baseUrl + this.endpointUrl)
      .pipe(
        tap(_ => this.log('fetched persons')),
        catchError(this.handleError<PersonViewModel[]>('getPersons', []))
      );
  }

  // Post person
  addPerson(per: PersonViewModel): Observable<PersonViewModel> {
    return this.http.post<PersonViewModel>(this.baseUrl + this.endpointUrl, per, this.httpOptions).pipe(
      tap((newPerson: PersonViewModel) => this.log(`added person id=${newPerson.id}`)),
      catchError(this.handleError<PersonViewModel>('addPerson'))
    );
  }

  // Put person
  savePerson(per: PersonViewModel): Observable<PersonViewModel> {
    return this.http.put<PersonViewModel>(this.baseUrl + `${this.endpointUrl}/${per.id}`, per, this.httpOptions).pipe(
      tap(() => this.log(`saved person id=${per.id}`)),
      catchError(this.handleError<PersonViewModel>('savePerson'))
    );
  }

  private handleError<T>(operation = 'op', result?: T) {
    return (error: any): Observable<T> => {
      // log as error to console
      console.error(`Error: ${error}`)
      // log full error information
      this.log(`Http ${operation} failed: ${error.message}`);
      
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
