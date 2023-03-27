package controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.service;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api")
public class controller {

    private final service service;

    public controller(@Autowired service service) {
        this.service = service;
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveImage(@RequestParam String image, HttpServletRequest req) {
        service.saveImage(image);
        URI location = URI.create(req.getRequestURL() + "/" + image);
        return ResponseEntity.created(location).body(image);

    }

    @GetMapping("/getImages")
    public ResponseEntity<List<String>> getImages() {
        return ResponseEntity.ok().body(service.findAll());
    }


}
