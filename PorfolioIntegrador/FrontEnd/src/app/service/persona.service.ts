import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from "../model/Persona";

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 // url = 'http://localhost:8080/personas' ;

  constructor(private http: HttpClient) { }

  getPersona() {
    return this.http.get<Persona[]>("http://localhost:8080/personas/traer");
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>("http://localhost:8080/personas/crear",persona);
  }
}
