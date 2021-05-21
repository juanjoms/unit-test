import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  name: string;
  email: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly USERS_URL = 'https://randomuser.me/api';

  constructor(private http: HttpClient) {}

  getUsers(results: number = 20): Observable<User[]> {
    return this.http.get<any>(`${this.USERS_URL}?results=${results}`)
      .pipe(
        map(response => this.mapResults(response.results))
      )

  }

  mapResults(results: any[]): User[] {
    return results.map(result => ({
      name: `${result.name.first} ${result.name.last}`,
      email: result.email,
      image: result.picture.thumbnail
    }))
  }
}
