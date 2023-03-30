package tetrad.virtualmuseum.DAO;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "tblThumbnail")
public class Thumbnail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "lqip")
    private String lqip;

    @Column(name = "width")
    private int width;
    @Column(name = "height")
    private int height;

    @Column(name = "alt_text")
    private String altText;

    @JsonIgnore
    @OneToOne()
    @JoinColumn(name = "thumbnail_id")
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
