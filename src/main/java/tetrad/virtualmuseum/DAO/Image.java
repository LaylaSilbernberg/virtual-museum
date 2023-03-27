package tetrad.virtualmuseum.DAO;

import jakarta.persistence.*;

@Entity
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int imageId;
    private String title;
    private String altTitles;
    private String placeOfOrigin;
    private String artistDisplay;
    private int galleryId;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id")
    private Gallery gallery;

    public Image() {
    }

    public Image(int imageId, String title, String altTitles, String placeOfOrigin, String artistDisplay, int galleryId, Gallery gallery) {
        this.imageId = imageId;
        this.title = title;
        this.altTitles = altTitles;
        this.placeOfOrigin = placeOfOrigin;
        this.artistDisplay = artistDisplay;
        this.galleryId = galleryId;
        this.gallery = gallery;
    }

    public int getImageId() {
        return imageId;
    }

    public void setImageId(int imageId) {
        this.imageId = imageId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAltTitles() {
        return altTitles;
    }

    public void setAltTitles(String altTitles) {
        this.altTitles = altTitles;
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

    public int getGalleryId() {
        return galleryId;
    }

    public void setGalleryId(int galleryId) {
        this.galleryId = galleryId;
    }

    public Gallery getGallery() {
        return gallery;
    }

    public void setGallery(Gallery gallery) {
        this.gallery = gallery;
    }
}
