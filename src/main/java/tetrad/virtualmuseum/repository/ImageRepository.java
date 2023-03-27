package tetrad.virtualmuseum.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ImageRepository implements IImageRepository{

    JpaImageRepository jpaImageRepository;

    public ImageRepository(@Autowired JpaImageRepository jpaImageRepository) {
        this.jpaImageRepository = jpaImageRepository;
    }


}
