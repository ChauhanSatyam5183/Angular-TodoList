import { Routes } from '@angular/router';
import { Todos } from './mycomponent/todos/todos';
import { About } from './mycomponent/about/about';

export const routes: Routes = [
      { path: '', component: Todos },
      {path:"about",component:About}        // default route
  
];
