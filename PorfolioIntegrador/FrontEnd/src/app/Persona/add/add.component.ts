import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from "src/app/model/Persona";
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
  persona:Persona=new Persona(0,"","","");

  constructor(private router:Router,private service: PersonaService) { }
  
  ngOnInit() {
  }

  Guardar(){
    this.service.createPersona(this.persona)
    .subscribe( data =>{
      this.persona = data;
      alert("agregado correctamente");
      this.router.navigate([""]);
      console.log(this.persona);
  })
  }


}
