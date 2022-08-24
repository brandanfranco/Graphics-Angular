import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphicsService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('http://localhost:3000/grafica').pipe(delay(1500));
  }

  // returning with data in [ Strings]

  getUsersData() {
    return this.getUsers().pipe(
      map((users) => {
        const labels = Object.keys(users);
        const values = Object.values(users);
        return { labels, values };
      })
    );
  }
}
