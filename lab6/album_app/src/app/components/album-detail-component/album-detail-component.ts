import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';
import { Observable, map, tap } from 'rxjs';

@Component({
    selector: 'app-album-detail',
    standalone: true,
    imports: [AsyncPipe, RouterLink, FormsModule],
    templateUrl: './album-detail-component.html',
    styleUrl: './album-detail-component.css',
})
export class AlbumDetailComponent implements OnInit {
    private albumService = inject(AlbumService);
    private route = inject(ActivatedRoute);

    album$!: Observable<Album>;
    newTitle: string = ''; // Сюда будем биндить инпут

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.album$ = this.albumService.getAlbum(Number(id)).pipe(
                // Когда данные пришли, записываем текущий заголовок в переменную для редактирования
                tap(album => this.newTitle = album.title)
            );
        }
    }

    saveTitle(album: Album): void {
        const updatedAlbum = { ...album, title: this.newTitle };

        this.albumService.updateAlbum(updatedAlbum).subscribe({
            next: (res) => {
                // Локально обновляем поток, чтобы UI увидел новое название
                // (так как сервер по-настоящему не сохранит)
                this.album$ = new Observable(sub => sub.next(res));
            },
            error: (err) => console.error('Update failed', err)
        });
    }
}