import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from "src/app/model/Persona";
import { PersonaService } from 'src/app/service/persona.service';



@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona:Persona[]=[];

  constructor(private router:Router,private personaService: PersonaService){}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{this.persona = data})
  }

 Listar(){
   this.router.navigate(['Listar']);
}
 Nuevo(){
   this.router.navigate(['Nuevo']);
 }
  

 }