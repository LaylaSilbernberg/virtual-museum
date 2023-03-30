package tetrad.virtualmuseum.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.lang.Nullable;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ImageDTO(

        @JsonProperty int personalGalleryId,

        @JsonProperty("title") String title,
        @JsonProperty("place_of_origin") String placeOfOrigin,

        @JsonProperty("department_title") String departmentTitle,

        @JsonProperty("department_id") String departmentId,

        @JsonProperty ThumbnailDTO thumbnailDTO,

        @Nullable @JsonProperty("gallery_title") String galleryTitle,
        @JsonProperty("artist_display") String artistDisplay,
        @Nullable @JsonProperty("gallery_id") int galleryId,
        @JsonProperty("image_id") String imageId
) {

}
