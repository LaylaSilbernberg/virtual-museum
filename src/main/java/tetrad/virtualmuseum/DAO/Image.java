package tetrad.virtualmuseum.DAO;

import jakarta.persistence.*;
import tetrad.virtualmuseum.DTO.ThumbnailDTO;

@Entity
@Table(name = "tblImage")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String imageID;

    private String title;
    private String placeOfOrigin;
    private String artistDisplay;


    @ManyToOne(optional = false)
    @JoinColumn(name = "id")
    private Gallery gallery;

    @OneToOne(orphanRemoval = true)
    @JoinTable(name = "tbl_image_thumbnail",
            joinColumns = @JoinColumn(name = "image_id"),
            inverseJoinColumns = @JoinColumn(name = "thumbnail_id"))
    private Thumbnail thumbnail;

    public Image() {
    }

    public Image(String imageID, String title, String placeOfOrigin, String artistDisplay, Gallery gallery, Thumbnail thumbnail) {
        this.imageID = imageID;
        this.title = title;
        this.placeOfOrigin = placeOfOrigin;
        this.artistDisplay = artistDisplay;
        this.gallery = gallery;
        this.thumbnail = thumbnail;
    }

    public Image(Long id, String imageID, String title, String placeOfOrigin, String artistDisplay, Thumbnail thumbnail, Gallery gallery) {
        this.id = id;
        this.imageID = imageID;
        this.title = title;
        this.placeOfOrigin = placeOfOrigin;
        this.artistDisplay = artistDisplay;
        this.thumbnail = thumbnail;
        this.gallery = gallery;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImageID() {
        return imageID;
    }

    public void setImageID(String imageID) {
        this.imageID = imageID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPlaceOfOrigin() {
        return placeOfOrigin;
    }

    public void setPlaceOfOrigin(String placeOfOrigin) {
        this.placeOfOrigin = placeOfOrigin;
    }

    public String getArtistDisplay() {
        return artistDisplay;
    }

    public void setArtistDisplay(String artistDisplay) {
        this.artistDisplay = artistDisplay;
    }

    public Thumbnail getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(Thumbnail thumbnail) {
        this.thumbnail = thumbnail;
    }

    public Gallery getGallery() {
        return gallery;
    }

    public void setGallery(Gallery gallery) {
        this.gallery = gallery;
    }
}
