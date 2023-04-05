package tetrad.virtualmuseum.repository;


import org.springframework.beans.factory.annotation.Autowired;
import tetrad.virtualmuseum.DAO.Gallery;

import java.util.List;

@org.springframework.stereotype.Repository

public class Repository {

    GalleryRepo galleryRepo;

    ImageRepo imageRepo;

    public Repository(@Autowired GalleryRepo galleryRepo, @Autowired ImageRepo imageRepo) {
        this.galleryRepo = galleryRepo;
        this.imageRepo = imageRepo;
    }

    public Gallery findGalleryById(Long id) {
       return galleryRepo.findGalleryById(id);
    }

    public Gallery save(Gallery gallery) {
        return galleryRepo.save(gallery);
    }

    public List<Gallery> findAll() {
        return galleryRepo.findAll();
    }

    public void deleteImageById(Long imageId) {
        imageRepo.deleteById(imageId);
    }
}
