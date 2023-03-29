package tetrad.virtualmuseum.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import tetrad.virtualmuseum.repository.GalleryRepo;
import tetrad.virtualmuseum.DAO.Gallery;
@org.springframework.stereotype.Service
public class Service {
    private GalleryRepo repo;

    public Service(@Autowired GalleryRepo repo){
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
