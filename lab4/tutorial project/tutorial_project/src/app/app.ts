import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Note } from './models/note.model';
import { CommonModule } from '@angular/common';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly notes = signal<Note[]>([
      {
        id: 1,
        title: 'first note',
        content: 'Hi its my first note',
        createdAt: new Date(),
      },
      {
        id: 2,
        title: 'second note',
        content: 'Angular is very comfort to use',
        createdAt: new Date(),
      },
  ]);

  title = "Hello world on my website";

  showAlert()
  {
    alert("alert");
  }

  handleSubscribe() 
  {
    console.log("all is working!");
    alert("all is working!");
  }
}
