import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../interfaces';
import { PaginationApiService } from './pagination-api.service';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private paginationApiService: PaginationApiService) {
  }

  fetchUsers(page): Observable<any> {
    console.log('fetching users');
    return this.http.get('https://reqres.in/api/users?page=' + page).pipe(map(response => {
      const parsedResponse = JSON.parse(JSON.stringify(response));
      return parsedResponse.data;
    }));
  }

  fetchPaginationInfo(): Observable<any> {
    return this.paginationApiService.fetchPaginationInfo();
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(map(response => {
      const parsedResponse = JSON.parse(JSON.stringify(response));
      return parsedResponse;
    }));
  }

}
