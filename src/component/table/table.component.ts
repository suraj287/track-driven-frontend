import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../service/track.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tracks: any[] = [];
  displayedColumns: string[] = ['name', 'artist', 'advice'];

  constructor(private trackService: TrackService) {}

  ngOnInit() {
    this.trackService.getTracks().subscribe((data: any) => {
      this.tracks = data;
    });
  }
}
