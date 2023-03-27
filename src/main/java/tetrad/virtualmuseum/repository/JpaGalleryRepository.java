package tetrad.virtualmuseum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tetrad.virtualmuseum.DAO.Gallery;

public interface JpaGalleryRepository extends JpaRepository {
    Gallery findGalleryById(Integer valueOf);

}
