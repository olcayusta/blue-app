import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  APIKEY = 'a7e7c60b6bb403537b3b850adebe653c';
  constructor(private http: HttpClient) {}

  getMovie(movieId: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.APIKEY}&language=en-US`)
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      `https://api.themoviedb.org/3/movie/popular?api_key=a7e7c60b6bb403537b3b850adebe653c&language=en-US&page=1`
    ).pipe(map((value: any) => {
      return value.results;
    }))
  }
}
