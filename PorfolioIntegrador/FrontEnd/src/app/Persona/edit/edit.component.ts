import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona:Persona=new Persona(0,"","","");
  
  constructor(private router:Router, private service:PersonaService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })
  }
  Actualizar(persona:Persona){
    this.service.editPersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert("actualizado correctamente!");
      this.router.navigate(["Listar"]);
    })
  }
}
