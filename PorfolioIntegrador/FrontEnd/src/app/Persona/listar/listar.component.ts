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

  personas: Persona[]=[];
  constructor(private personaService: PersonaService,private router: Router) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe( data =>{this.personas = data})
  }

}
