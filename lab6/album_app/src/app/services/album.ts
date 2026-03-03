// services/album.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
    providedIn: 'root'
})
export class AlbumService {
    private http = inject(HttpClient); // Современный способ внедрения зависимостей
    private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

    // Получить все альбомы
    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>(this.apiUrl);
    }

    // Получить один альбом по ID
    getAlbum(id: number): Observable<Album> {
        return this.http.get<Album>(`${this.apiUrl}/${id}`);
    }

    // Получить фото конкретного альбома
    getAlbumPhotos(id: number): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${this.apiUrl}/${id}/photos`);
    }

    // Обновить альбом (PUT)
    updateAlbum(album: Album): Observable<Album> {
        return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album);
    }

    // Удалить альбом (DELETE)
    deleteAlbum(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}