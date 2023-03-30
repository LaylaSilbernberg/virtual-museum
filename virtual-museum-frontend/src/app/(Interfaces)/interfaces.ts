export interface Data {
    id:               number;
    title:            string;
    artist_display:   string;
    place_of_origin:  string;
    thumbnail:        Thumbnail;
    gallery_title:    null | string;
    gallery_id:       number | null;
    department_title: string;
    department_id:    string;
    image_id:         string;
}

export interface Thumbnail {
    lqip:     string;
    width:    number;
    height:   number;
    alt_text?: string | null;
}

export interface ImageDTO {

}