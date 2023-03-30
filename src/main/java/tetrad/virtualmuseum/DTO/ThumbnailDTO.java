package tetrad.virtualmuseum.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;

public record Thumbnail(
        String lqip,
        Integer width,
        Integer height,
        @JsonProperty("alt_text") String altText
) {


}
