import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PruebasComponent} from './pruebas/pruebas.component';
import { InicioComponent} from './inicio/inicio.component';



export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Página de inicio predeterminada
  { path: 'login', component: LoginComponent },
  { path: 'pruebas', component: PruebasComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'menu', component: MenuComponent}

];
