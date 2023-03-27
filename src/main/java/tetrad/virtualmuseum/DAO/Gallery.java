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
}
