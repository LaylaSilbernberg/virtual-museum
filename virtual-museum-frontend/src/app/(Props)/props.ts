import { Data, Thumbnail } from "../(Interfaces)/interfaces";

export interface ArtworkProps {
    id?: number;
    title:            string;
    thumbnail:        Thumbnail;
    artist_display:   string;
    place_of_origin:  string;
    image_id:         string;
}

export interface GalleryProp{
    pageData?: Data[];
}