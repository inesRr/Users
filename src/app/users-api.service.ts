import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserApi } from './user-model';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  public static users = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {

  }
  public getUsers(): Observable<User[]> {
    return this.http.get<UserApi[]>(UsersApiService.users).pipe(
      catchError(error => {
        console.error('Cannot get users', error);
        throw error;
      }),
      map(users => users.map(user => {
        return {
          id: user.id,
          name: user.name,
          //address is an object that contains multiple properties so we map it to get the final result to display - string
          address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
          email: user.email,
          username: user.username
        }
      }))
    );
  }
}
