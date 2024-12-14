import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent, FormsModule, NgClass,ReactiveFormsModule],//forms module hace que se actuice en timpo real variables
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username: string ="Rafa";
  title = 'tasktackerF';

  contador = 1;

  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }


}
