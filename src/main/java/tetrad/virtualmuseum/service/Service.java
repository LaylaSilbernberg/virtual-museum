package tetrad.virtualmuseum.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tetrad.virtualmuseum.repository.GalleryRepo;
import tetrad.virtualmuseum.DAO.Gallery;
@Service
public class Service {
    private GalleryRepo repo;

    public Service(@Autowired GalleryRepo repo){
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

    public List<Gallery> getGalleries() {
        return repo.findAll();
    }

}
