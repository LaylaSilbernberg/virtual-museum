package tetrad.virtualmuseum.DAO;

import jakarta.persistence.*;

@Entity
@Table(name = "tblGallery")
public class Gallery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String galleryName;
    private String description;
    private String imageId;

    public Gallery() {
    }

    public Gallery(int id, String galleryName, String description, String imageId) {
        this.id = id;
        this.galleryName = galleryName;
        this.description = description;
        this.imageId = imageId;
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

    public String getImageId() {
        return imageId;
    }

    public void setImageId(String imageId) {
        this.imageId = imageId;
    }
}
