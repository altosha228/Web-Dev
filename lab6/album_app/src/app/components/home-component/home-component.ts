import { Component } from '@angular/core';
import { NavbarComopnent } from '../navbar-comopnent/navbar-comopnent';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [NavbarComopnent, RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
