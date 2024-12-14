import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
