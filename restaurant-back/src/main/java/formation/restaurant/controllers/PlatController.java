package formation.restaurant.controllers;

import formation.restaurant.model.Plat;
import formation.restaurant.repositories.PlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"}, maxAge = 3600)
@RestController
public class PlatController {

    @Autowired
    private PlatRepository platRepository;

//    List<Plat> plats = new ArrayList<>();

//    PlatController() {
//        plats.add(new Plat(1, "Boeuf", "Boeuf à la sauce champi", 20));
//        plats.add(new Plat(2, "Ravioli", "Ravioli à la sauce champi", 10));
//        plats.add(new Plat(3, "Brocoli", "Brocoli à la sauce champi", 24));
//    }

    @RequestMapping(value = "/Plats", method = RequestMethod.GET)
    public List<Plat> getPlats() {
        return platRepository.findAll();

//        return plats;
    }

    @GetMapping(value = "/Plats/{id}")
    public Plat getPlat(@PathVariable long id) {
        return platRepository.findById(id).get();

//        return plats.stream().filter(v -> v.getId() == id).findFirst().get();
    }

    @PostMapping(value = "/Plats")
    public void ajouterProduit(@RequestBody Plat plat) {
        platRepository.save(plat);

//        plats.add(plat);
    }

    @PutMapping(value = "/Plats")
    public void modifierProduit(@RequestBody Plat plat) {
        platRepository.save(plat);

//        int i;
//        for (i=0; i < plats.size(); i++) {
//            if(plats.get(i).getId()==plat.getId()){
//                break;
//            }
//        }
//        if(plats.size()!=i){
//            plats.set(i, plat);
//        }
//        return plat;
    }
}
