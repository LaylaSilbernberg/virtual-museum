package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tetrad.virtualmuseum.DAO.Gallery;

import java.util.Optional;

public interface galleryRepo extends JpaRepository<Gallery, Integer> {

// findAll is a default, usable function. Can omit here.
    Gallery findGalleryById(int id);
}
