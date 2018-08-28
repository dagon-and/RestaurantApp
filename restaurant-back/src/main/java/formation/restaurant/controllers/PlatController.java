package formation.restaurant.controllers;

import formation.restaurant.model.Plat;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@CrossOrigin(origins = {"http://localhost:4200"}, maxAge = 3600)
@RestController
public class PlatController {
    List<Plat> plats = new ArrayList<>();

    PlatController() {
        plats.add(new Plat(1, "Boeuf", "Boeuf à la sauce champi", 20));
        plats.add(new Plat(2, "Ravioli", "Ravioli à la sauce champi", 10));
        plats.add(new Plat(3, "Brocoli", "Brocoli à la sauce champi", 24));
    }

    @RequestMapping(value = "/Plats", method = RequestMethod.GET)
    public List<Plat> getPlats() {
        return plats;
    }

    @GetMapping(value="/Plats/{id}")
    public Plat getPlat(@PathVariable int id) {
        return plats.stream().filter(v -> v.getId() == id).findFirst().get();
    }
}
