import { Component } from '@angular/core';
import { alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  listaAlumnos: Array<alumno> = [
    {
      nombre: "Rocio",
      edad: 38,
      sexo: 'F',
      activo: false
    },
    {
      nombre: "Gloria",
      edad: 30,
      sexo: 'F',
      activo: false
    },
    {
      nombre: "Gabriel",
      edad: 28,
      sexo: 'M',
      activo: false
    },
    {
      nombre: "Sebastian",
      edad: 39,
      sexo: 'M',
      activo: true
    },
    {
      nombre: "Facundo",
      edad: 24,
      sexo: 'M',
      activo: false
    },
  ]
}
