import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/photo';
import { AlbumService } from '../../services/album';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-photos-component',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './album-photos-component.html',
  styleUrl: './album-photos-component.css',
})
export class AlbumPhotosComponent implements OnInit {
    private albumService = inject(AlbumService);
    private route = inject(ActivatedRoute);

    id = this.route.snapshot.paramMap.get('id');
    photos$! : Observable<Photo[]>;
    ngOnInit()
    {
        this.photos$ = this.albumService.getAlbumPhotos(Number(this.id));
    }
}
