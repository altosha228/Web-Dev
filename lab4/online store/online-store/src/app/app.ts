import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProducListComponent } from './produc-list-component/produc-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProducListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
}
