// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),

    provideHttpClient()
  ]
}).catch(err => console.error(err));


/*bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // Asegúrate de incluir esto

  ],
}).catch((err) => console.error(err));
*/
