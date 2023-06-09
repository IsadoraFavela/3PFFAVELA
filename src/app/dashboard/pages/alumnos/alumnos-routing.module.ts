import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { AlumnoDetalleComponent } from './pages/alumno-detalle/alumno-detalle.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
      path:'',
      component: AlumnosComponent
      },
      {
        path: ':id',
        component: AlumnoDetalleComponent
      }

    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AlumnosRoutingModule { }
