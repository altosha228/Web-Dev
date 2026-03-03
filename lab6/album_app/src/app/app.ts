import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComopnent } from './components/navbar-comopnent/navbar-comopnent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComopnent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('album_app');
}
