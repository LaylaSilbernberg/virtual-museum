package tetrad.virtualmuseum;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/vm")
@CrossOrigin
public class Controller {

    @GetMapping
    public ResponseEntity<String> getApi()
    {
        return ResponseEntity.ok("Hello people");
    }
}
