package tetrad.virtualmuseum.repository;


import tetrad.virtualmuseum.DAO.Gallery;

import java.util.List;

@org.springframework.stereotype.Repository

public class Repository {

    GalleryRepo galleryRepo;

    ImageRepo imageRepo;

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
