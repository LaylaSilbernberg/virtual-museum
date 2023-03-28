import React, { ForwardRefExoticComponent, Ref, useEffect, useRef, useState } from 'react'
import { ArtworkProps } from '../(Props)/props'
import Image from "next/image";
import Popup from 'reactjs-popup';



const Artworks = ({image_id, title, artist_display, place_of_origin, thumbnail}: ArtworkProps) => {

    const [openImage, setOpenImage] = useState<boolean>(false);
    const imageRef = useRef<HTMLDivElement>(null)

    openImage ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";    

  return (

    <>
     <Popup open={openImage} closeOnDocumentClick onClose={() => setOpenImage(false)}>
      <div 
      id='largeImage__container'
      className="largeImage__container">
      <Image
                  className='largeImage__artwork'
                  src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
                  alt={`${thumbnail.alt_text}`}
                  width={600}
                  height={600}
                  onClick={() => setOpenImage(false)}
                  priority
                  />
      </div>
    </Popup>
    
      <div className="image__card">
              <Image
                  className='image__artwork'
                  src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
                  alt={`${thumbnail.alt_text}`}
                  width={300}
                  height={300}
                  onClick={() => setOpenImage(true)}
                  priority />
        </div></>
  )
}

export default Artworks