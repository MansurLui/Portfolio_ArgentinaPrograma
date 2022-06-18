import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  persona: Persona[]=[];
  constructor(private personaService: PersonaService,private router: Router) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe( data =>{this.persona = data})
  }

  Editar(persona:Persona): void {
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["Edit"])
  }

  Delete(persona:Persona): void {
    this.personaService.deletePersona(persona)
    .subscribe(data =>{this.persona = this.persona.filter(p=>p!==persona);
    alert("usuario eliminado...");
    })
  }
}
