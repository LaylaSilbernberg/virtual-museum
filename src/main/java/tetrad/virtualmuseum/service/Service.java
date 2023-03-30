package tetrad.virtualmuseum.service;

import java.util.List;

import jakarta.transaction.Transactional;
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

    @Transactional
    public Gallery saveGallery(ImageDTO dto){
        System.out.println(dto.personalGalleryId());
        Gallery gallery = repo.findGalleryById(dto.personalGalleryId());

        Thumbnail thumbnail = new Thumbnail(dto.thumbnailDTO().width(), dto.thumbnailDTO().height(), dto.thumbnailDTO().altText());

        Image image = new Image(dto.imageId(), dto.title(), dto.placeOfOrigin(), dto.artistDisplay(), gallery, thumbnail);

        List<Image> list = gallery.getImages();
        list.add(image);

        gallery.setImages(list);

        System.out.println(gallery.getImages().get(0).getTitle());

        repo.save(gallery);

        System.out.println("2nd: ");

        Gallery gallery2 = repo.findGalleryById(dto.personalGalleryId());

        System.out.println(gallery2.getImages().get(0).getTitle());

       return repo.save(gallery);
    }

    public Long createGallery(){
        return repo.save(new Gallery()).getId();
    }

    public List<Gallery> getGalleries() {
        return repo.findAll();
    }

}
