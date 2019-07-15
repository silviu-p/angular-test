import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PaginationApiService {

  constructor(private http: HttpClient) {
  }

  fetchPaginationInfo(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=1').pipe(map(response => {
      console.log('response is: ', response);
      console.log('type of response is: ', typeof(response));
      console.log('stringified response is: ', JSON.stringify(response));
      console.log('parsed stringified response is: ', JSON.parse(JSON.stringify(response)));
      const parsedResponse = JSON.parse(JSON.stringify(response));
      return {
        total_pages: parsedResponse.total_pages,
        per_page: parsedResponse.per_page,
        total: parsedResponse.total,
        page: parsedResponse.page
      };
    }));
  }
}
