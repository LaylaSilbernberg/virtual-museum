package tetrad.virtualmuseum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tetrad.virtualmuseum.DAO.Gallery;
@Repository
public interface GalleryRepo extends JpaRepository<Gallery, Long> {

// findAll is a default, usable function. Can omit here.
    Gallery findGalleryById(Long id);
}
