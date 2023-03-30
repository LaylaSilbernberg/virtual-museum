package tetrad.virtualmuseum.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import tetrad.virtualmuseum.DAO.Image;
import tetrad.virtualmuseum.DAO.Thumbnail;
import tetrad.virtualmuseum.DTO.ImageDTO;
import tetrad.virtualmuseum.repository.GalleryRepo;
import tetrad.virtualmuseum.DAO.Gallery;
@org.springframework.stereotype.Service
public class Service {
    private final GalleryRepo repo;

    public Service(@Autowired GalleryRepo repo){
        this.repo=repo;
    }

    public Gallery getGalleryById(Long id){
        return repo.findGalleryById(id); }

    public Gallery saveGallery(ImageDTO dto){
        Gallery gallery = repo.findGalleryById(dto.personalGalleryId());

        Thumbnail thumbnail = new Thumbnail(dto.thumbnailDTO().lqip(), dto.thumbnailDTO().width(), dto.thumbnailDTO().height(), dto.thumbnailDTO().altText());

        gallery.getImage().add(new Image(dto.imageId(), dto.title(), dto.placeOfOrigin(), dto.artistDisplay(), gallery, thumbnail));

       return repo.save(gallery);
    }

    public Long createGallery(){
        return repo.save(new Gallery()).getId();
    }

    public List<Gallery> getGalleries() {
        return repo.findAll();
    }

}
