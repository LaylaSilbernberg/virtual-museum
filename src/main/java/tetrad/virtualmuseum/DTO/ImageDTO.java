package tetrad.virtualmuseum.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ImageDTO(
        @JsonProperty("id") int id,
        @JsonProperty("title") String title,
        @JsonProperty("alt_titles") String[] altTitles,
        @JsonProperty("place_of_origin") String placeOfOrigin,
        @JsonProperty("artist_display") String artistDisplay,
        @JsonProperty("gallery_id") int galleryId,
        @JsonProperty("image_id") String imageId
) {

}
