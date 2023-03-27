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

    @PostMapping("/createGallery")
    public ResponseEntity<Gallery> saveGallery(@RequestParam Gallery gallery, HttpServletRequest req) {

        URI location = URI.create(req.getRequestURL() + "/" + gallery.getId());
        return ResponseEntity.created(location).body(gallery);

    }

    @GetMapping("/getGallery/{id}")
    public ResponseEntity<Gallery> getGallery(@PathVariable String id) {
        return ResponseEntity.ok().body(service.getGalleryById(id));
    }


}
