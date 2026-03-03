import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { AboutComopnent } from './components/about-comopnent/about-comopnent';
import { AlbumsComponent } from './components/albums-component/albums-component';
import { AlbumDetailComponent } from './components/album-detail-component/album-detail-component';
import { AlbumPhotosComponent } from './components/album-photos-component/album-photos-component';

export const routes: Routes = [
    // 1. Редирект с пустого пути на /home
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 

    // 2. Исправленные пути (без начального /)
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComopnent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'albums/:id', component: AlbumDetailComponent },
    { path: 'albums/:id/photos', component: AlbumPhotosComponent }
];
