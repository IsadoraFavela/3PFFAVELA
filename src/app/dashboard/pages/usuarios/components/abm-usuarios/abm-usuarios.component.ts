import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-usuarios',
  templateUrl: './abm-usuarios.component.html',
  styleUrls: ['./abm-usuarios.component.scss']
})
export class AbmUsuariosComponent {

  nombreControl = new FormControl('', [Validators.required]);
  fechaInicioControl = new FormControl('', [Validators.required]);
  fechaFinControl = new FormControl('', [Validators.required]);

  cursoForm = new FormGroup({
    nombre: this.nombreControl,
    fecha_inicio: this.fechaInicioControl,
    fecha_fin: this.fechaInicioControl,
  });

  constructor(
    private dialogRef: MatDialogRef<AbmUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    if (data) {
      const cursoParaEditar = data.curso;
      this.nombreControl.setValue(cursoParaEditar.nombre);
      this.fechaInicioControl.setValue(cursoParaEditar.fecha_inicio);
      this.fechaFinControl.setValue(cursoParaEditar.fecha_fin);
    }
  }


  guardar(): void {
    if (this.cursoForm.valid) {
      this.dialogRef.close(this.cursoForm.value)
    } else {
      this.cursoForm.markAllAsTouched();
    }
  }
}
