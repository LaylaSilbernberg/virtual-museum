package tetrad.virtualmuseum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tetrad.virtualmuseum.DAO.Gallery;

public interface GalleryRepo extends JpaRepository<Gallery, Integer> {

// findAll is a default, usable function. Can omit here.
    Gallery findGalleryById(int id);
}
