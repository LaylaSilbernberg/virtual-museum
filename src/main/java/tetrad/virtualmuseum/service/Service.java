package tetrad.virtualmuseum.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tetrad.virtualmuseum.repository.galleryRepo;
import tetrad.virtualmuseum.DAO.Gallery;
@Service
public class service {
    private galleryRepo repo;

    public service(@Autowired galleryRepo repo){
        this.repo=repo;
    }

    public Gallery getGalleryById(String id){
        return repo.findGalleryById(Integer.valueOf(id));
    }

    public void saveGallery(Gallery gallery){
    repo.save(gallery);
    }

    public int createGallery(){
        Gallery gallery = new Gallery();
        repo.save(gallery);
        return gallery.getId();
    }

    public List<Gallery> getGalleries() {
        return repo.findAll();
    }

}
