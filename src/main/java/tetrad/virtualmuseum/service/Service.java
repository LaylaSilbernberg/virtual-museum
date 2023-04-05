package tetrad.virtualmuseum.service;

import java.util.List;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;


import tetrad.virtualmuseum.DAO.Image;
import tetrad.virtualmuseum.DAO.Thumbnail;
import tetrad.virtualmuseum.DTO.ImageDTO;
import tetrad.virtualmuseum.DAO.Gallery;
import tetrad.virtualmuseum.repository.Repository;

@org.springframework.stereotype.Service
public class Service {


    private final Repository repo;

    public Service(@Autowired Repository repo) {
        this.repo = repo;
    }

    public Gallery getGalleryById(Long id){
        return repo.findGalleryById(id); }

    @Transactional
    public Gallery saveGallery(ImageDTO dto){
        Gallery gallery = repo.findGalleryById(dto.personalGalleryId());

        Thumbnail thumbnail = new Thumbnail(dto.thumbnailDTO().width(), dto.thumbnailDTO().height(), dto.thumbnailDTO().altText());

        Image image = new Image(dto.imageId(), dto.title(), dto.placeOfOrigin(), dto.artistDisplay(), gallery, thumbnail);

        thumbnail.setImage(image);

        gallery.getImages().add(image);

       return repo.save(gallery);
    }

    public Long createGallery(){
        return repo.save(new Gallery()).getId();
    }

    public List<Gallery> getGalleries() {
        return repo.findAll();
    }

    public void deleteImageFromGallery(Long id, Long imageId) {
        repo.deleteImageById(imageId);
    }
}
