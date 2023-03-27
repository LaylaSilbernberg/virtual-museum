package tetrad.virtualmuseum;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tetrad.virtualmuseum.service.service;
import tetrad.virtualmuseum.DAO.Gallery;

import java.net.URI;

@RestController
@RequestMapping("/api")
public class controller {

    private final service service;

    public controller(@Autowired service service) {
        this.service = service;
    }

    @PostMapping("/createEmptyGallery")
    public ResponseEntity<Gallery> createEmptyGallery(HttpServletRequest req) {
        URI location = URI.create(req.getRequestURL() + "/" + service.createGallery());
        //Service.createGallery creates an empty gallery and returns its respective id
        return ResponseEntity.created(location).body(service.getGalleryById(String.valueOf(service.createGallery())));

    }

    @GetMapping("/getGallery/{id}")
    public ResponseEntity<Gallery> getGallery(@PathVariable String id) {
        return ResponseEntity.ok().body(service.getGalleryById(id));
    }

    @PatchMapping("/updateGallery")
    public ResponseEntity<?> updateGallery(@RequestBody Gallery gallery) {
        service.saveGallery(gallery);
        return ResponseEntity.ok(gallery.getId() + " successfully updated");
    }


}
