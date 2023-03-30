package tetrad.virtualmuseum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tetrad.virtualmuseum.DAO.Gallery;

public interface GalleryRepo extends JpaRepository<Gallery, Long> {

// findAll is a default, usable function. Can omit here.
    Gallery findGalleryById(Long id);
}
