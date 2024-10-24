import { Routes } from '@angular/router';


export const routes: Routes = [{
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
},{
    path:'model-upload',
    loadComponent: () => import('./components/model-upload/model-upload.component').then(m => m.ModelUploadComponent)
},{
    path:'',
    redirectTo:'home',
    pathMatch:'full'
},{
    path:'crud',
    loadComponent: () => import('./components/crud/crud.component').then(m => m.CrudComponent)
},{
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
}];
