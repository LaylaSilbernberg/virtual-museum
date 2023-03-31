import { Data, Thumbnail, Image, ThumbnailDTO } from "../(Interfaces)/interfaces";

export interface ArtworkProps {
    id?: number;
    title:            string;
    thumbnail:        Thumbnail | null;
    artist_display:   string;
    place_of_origin:  string;
    image_id:         string;
    gallery_title: string | null;
    gallery_id: number | null;
    department_title: string;
    department_id: string;
}

export interface GalleryProp{
    pageData?: Data[];
}

export interface PersonalGalleryProp{
    pageData?: Image[];
}

export interface PersonalArtworkProp{
    id: number;
    paramId: string;
    image_id: string;
    title: string;
    place_of_origin: string;
    artist_display: string;
    thumbnail: ThumbnailDTO | null;
}