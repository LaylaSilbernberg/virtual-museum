package tetrad.virtualmuseum.DAO;


import jakarta.persistence.*;

@Entity
@Table(name = "tblThumbnail")
public class Thumbnail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String lqip;

    private int width;

    private int height;

    private String altText;

    @OneToOne(orphanRemoval = true)
    @JoinTable(name = "thumbnail_image",
            joinColumns = @JoinColumn(name = "thumbnail_id"),
            inverseJoinColumns = @JoinColumn(name = "image_id"))
    private Image image;

    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        this.image = image;
    }

    public Thumbnail(String lqip, int width, int height, String altText) {
        this.lqip = lqip;
        this.width = width;
        this.height = height;
        this.altText = altText;
    }

    public Thumbnail() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public String getAltText() {
        return altText;
    }

    public void setAltText(String altText) {
        this.altText = altText;
    }

    public String getLqip() {
        return lqip;
    }

    public void setLqip(String lqip) {
        this.lqip = lqip;
    }
}
