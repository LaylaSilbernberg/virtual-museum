package tetrad.virtualmuseum.repository;

import org.springframework.beans.factory.annotation.Autowired;
import tetrad.virtualmuseum.DAO.Gallery;

public interface IGalleryRepository {
    // list of function declaration which is going to be implemented by GalleryRepository

    public Gallery getGalleryById(String id);
    public void saveGallery(Gallery gallery);
    public int createGallery();
}
