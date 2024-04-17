import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { HomwComponent } from './homw/homw.component';
import { ContactComponent } from './contact/contact.component';


export const APP_ROUTES: Routes = [
  { path: '', loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule) },
  { path: 'home', component:HomwComponent },
  { path: 'contact/:id', component:ContactComponent },
  { path: '**', component: NotFoundComponent },
];
