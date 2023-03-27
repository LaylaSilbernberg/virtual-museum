import { Thumbnail } from "../(Interfaces)/interfaces";

export interface ArtworkProps {
    title:            string;
    thumbnail:        Thumbnail;
    artist_display:   string;
    place_of_origin:  string;
    image_id:         string;
}