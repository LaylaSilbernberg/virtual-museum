package tetrad.virtualmuseum.DAO;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "tblGallery")
public class Gallery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String galleryName;
    private String description;
    @OneToMany(mappedBy = "gallery")
    private List<Image> image;

    public Gallery() {  
    }

    public Gallery(int id, String galleryName, String description, List<Image> image) {
        this.id = id;
        this.galleryName = galleryName;
        this.description = description;
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGalleryName() {
        return galleryName;
    }

    public void setGalleryName(String galleryName) {
        this.galleryName = galleryName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Image> getImage() {
        return image;
    }

    public void setImage(List<Image> image) {
        this.image = image;
    }
}
