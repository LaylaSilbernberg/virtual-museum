package tetrad.virtualmuseum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tetrad.virtualmuseum.DAO.Image;

public interface ImageRepo extends JpaRepository<Image, Long> {
}
