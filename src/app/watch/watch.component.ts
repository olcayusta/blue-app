import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";
import {Observable} from "rxjs";
import {Movie} from "../movie.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('watchId');
    this.movie$ = this.movieService.getMovie(+movieId);
  }
}
