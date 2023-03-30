package tetrad.virtualmuseum.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;

public record ThumbnailDTO(
        @JsonProperty("lqip") String lqip,
        @JsonProperty("width") Integer width,
        @JsonProperty("height") Integer height,
        @JsonProperty("alt_text") String altText
) {


}
