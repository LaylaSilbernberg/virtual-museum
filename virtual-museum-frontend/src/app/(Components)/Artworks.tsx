import React from 'react'
import { ArtworkProps } from '../(Props)/props'
import Image from "next/image";

const Artworks = ({image_id, title, artist_display, place_of_origin}: ArtworkProps) => {
  return (
    <Image 
    src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} 
    alt={`${artist_display}`}
    width={843}
    height={500}
    priority/>
  )
}

export default Artworks