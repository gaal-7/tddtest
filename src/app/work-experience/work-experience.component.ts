import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperience : Array<any>=[];
ngOnInit(): void{
  let work1={
    fecha:"2021-2024",
    ubicacion:"Córdoba, Ver.",
    puesto: "INGENIERO",
    empresa: "Laboratorio St rita",
    logros:[
      {descripcion:"Desarrollar aplicacion web para el control interno del laboratorio"},
      {descripcion:"Desarrollar aplicacion web para la salida de datos facilitando el trabajo de los quimicos"} 
    ]
  };
  let work2={
    fecha:"2021-2024",
    ubicacion:"Orizaba, Ver.",
    puesto: "INGENIERO",
    empresa: "DT",
    logros:[
      {descripcion:"Construcciode sistema de almacenado automatico"},
    {descripcion:"Detector automatico de control de calidad"}
    ]
  };
  this.workExperience.push(work1);
  this.workExperience.push(work2);
  console.log(this.workExperience);
}

}
