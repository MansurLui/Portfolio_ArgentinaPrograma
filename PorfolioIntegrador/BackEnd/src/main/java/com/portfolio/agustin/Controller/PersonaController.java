package com.portfolio.agustin.Controller;

import com.portfolio.agustin.Entity.Persona;
import com.portfolio.agustin.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersonaController {

    @Autowired
    IPersonaService ipersonaService;

    @GetMapping("personas/traer")
    public List<Persona> getPersona() {
        return ipersonaService.getPersona();
    }

    @PostMapping("/personas/crear")
    public void createPersona(@RequestBody Persona persona) {
        ipersonaService.savePersona(persona);

    }

    @DeleteMapping("/personas/borrar/{id}")
    public void deletePersona(@PathVariable Long id) {
        ipersonaService.deletePersona(id);
    }

    /**
     *
     * @param id
     * @param nuevoNombre
     * @param nuevoApellido
     * @param nuevoImg
     * @return
     */
    @PutMapping("/personas/editar/{id}")
    public Persona editPersona(@PathVariable("id") Long id, @RequestBody Persona persona) {
        persona.setId(id);
        ipersonaService.savePersona(persona);
        return persona;
    }

    @GetMapping(path = {"/personas/{id}"})
    public Persona findPersona(@PathVariable("id") Long id) {
        return ipersonaService.findPersona(id);
    }
}
