package tetrad.virtualmuseum.DAO;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "tblGallery")
public class Gallery {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
   // private String galleryName;
   // private String description;
    @OneToMany(mappedBy = "gallery")
    private List<Image> images;

    public Gallery() {  
    }

    public Gallery(Long id, List<Image> images) {
        this.id = id;
        this.images = images;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }
}
