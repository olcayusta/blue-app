import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
