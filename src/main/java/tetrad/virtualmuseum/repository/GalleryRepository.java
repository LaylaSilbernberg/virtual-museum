package tetrad.virtualmuseum.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import tetrad.virtualmuseum.DAO.Gallery;

@Repository
public class GalleryRepository implements IGalleryRepository{

    JpaGalleryRepository jpaGalleryRepository;

    public GalleryRepository(@Autowired JpaGalleryRepository jpaGalleryRepository) {
        this.jpaGalleryRepository = jpaGalleryRepository;
    }

    @Override
    public Gallery getGalleryById(String id) {
        return jpaGalleryRepository.findGalleryById(Integer.valueOf(id));
    }

    @Override
    public void saveGallery(Gallery gallery) {
        jpaGalleryRepository.save(gallery);
    }

    @Override
    public int createGallery() {
        Gallery gallery = new Gallery();
        jpaGalleryRepository.save(gallery);
        return gallery.getId();
    }
}
