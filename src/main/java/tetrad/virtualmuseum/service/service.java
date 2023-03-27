package tetrad.virtualmuseum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tetrad.virtualmuseum.repository.GalleryRepository;
import tetrad.virtualmuseum.DAO.Gallery;
@Service
public class service {
    private GalleryRepository repo;

    public service(@Autowired GalleryRepository repo){
        this.repo=repo;
    }

    public Gallery getGalleryById(String id){
        return repo.getGalleryById(id); }

    public void saveGallery(Gallery gallery){
    repo.saveGallery(gallery);
    }

    public int createGallery(){
        return repo.createGallery();
    }

}
