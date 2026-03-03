import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, map } from 'rxjs'; 
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-albums-component',
    standalone: true,
    imports: [AsyncPipe, RouterLink],
    templateUrl: './albums-component.html',
    styleUrl: './albums-component.css',
})
export class AlbumsComponent {
    private albumService = inject(AlbumService);

    // Изначально загружаем данные
    albums$: Observable<Album[]> = this.albumService.getAlbums();

    deleteAlbum(id: number): void {
        // 1. Отправляем запрос на сервер
        this.albumService.deleteAlbum(id).subscribe({
            next: () => {
                // 2. СЕРВЕР ответил "ОК". Теперь обновляем UI локально.
                // Мы берем текущий поток и "отфильтровываем" удаленный элемент
                this.albums$ = this.albums$.pipe(
                    map(albums => albums.filter(a => a.id !== id))
                );
            },
            error: (err) => {
                alert('Ошибка при удалении на сервере');
                console.error(err);
            }
        });
    }
}