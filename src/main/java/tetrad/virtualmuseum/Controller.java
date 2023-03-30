package tetrad.virtualmuseum;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tetrad.virtualmuseum.service.Service;
import tetrad.virtualmuseum.DAO.Gallery;
import tetrad.virtualmuseum.DTO.ImageDTO;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(path = "/api")
public class Controller {

    private final Service service;

    public Controller(@Autowired Service service) {
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

    @GetMapping("/getGalleries")
    public ResponseEntity<List<Gallery>> getGalleries () {
        return ResponseEntity.ok().body(service.getGalleries());
    }

    @PostMapping(path = "/updateGallery", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> updateGallery(@RequestBody ImageDTO dto) {
        return ResponseEntity.ok(service.saveGallery(dto).getId() + " successfully updated");
    }


}
