export interface Data {
    id:               number;
    title:            string;
    artist_display:   string;
    place_of_origin:  string;
    thumbnail:        Thumbnail | null;
    department_title: string;
    department_id:    string;
    image_id:         string;
}

export interface Thumbnail {
    id:       number | null;
    lqip:     string | null;
    width:    number;
    height:   number;
    alt_text?: string | null;
}

export interface ThumbnailDTO {
    id:      number;
    width:   number;
    height:  number;
    altText: string;
}

export interface PersonalGallery {
    id:     number;
    images: Image[];
}

export interface Image {
    id:            number;
    imageID:       string;
    title:         string;
    placeOfOrigin: string;
    artistDisplay: string;
    thumbnail:     ThumbnailDTO | null;
}

export interface PersonalGalleryViewProp{
    images?: Image[];
    paramID: string;
}