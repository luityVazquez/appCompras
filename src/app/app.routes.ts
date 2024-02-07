import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'proveedores', component: ProveedoresComponent },
    { path: '**', component: InicioComponent} /*Carga ese componente si pone una ruta que no está definida*/
];
