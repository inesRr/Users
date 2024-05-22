import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user-model';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  public static users = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { 

  }
public getUsers(): Observable<User[]> {
  return this.http.get<User[]>(UsersApiService.users).pipe(
    catchError(error => {
      console.error('Cannot get users', error);
      throw error;
    })
  );
}
}
