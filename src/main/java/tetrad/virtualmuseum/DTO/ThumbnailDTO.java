package tetrad.virtualmuseum.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ThumbnailDTO(
        @JsonProperty("width") Integer width,
        @JsonProperty("height") Integer height,
        @JsonProperty("alt_text") String altText
) {


}
