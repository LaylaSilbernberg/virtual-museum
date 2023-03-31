import React, {useState } from 'react'
import { Box, Button, Card, CardContent, IconButton, Typography, useMediaQuery, useTheme} from '@mui/material';
import { ArtworkProps } from '../(Props)/props'

import Popup from 'reactjs-popup';
import { FavoriteBorder, ThumbUp } from '@mui/icons-material';
import { Data } from '../(Interfaces)/interfaces';
import PopupComponent from './PopupComponent';
import Image from "next/image";



const Artworks = ({id, image_id, title, artist_display, place_of_origin, thumbnail, gallery_title, gallery_id, department_title, department_id}: ArtworkProps) => {

    const [openImage, setOpenImage] = useState<boolean>(false);
    const video: HTMLVideoElement = document.querySelector(".background__video")!;

    //const url = `https://virtualmuseumappreal.azurewebsites.net/api/updateGallery`
    const url = `http://localhost:8080/api/updateGallery`
    const requestBody: ArtworkProps = {
      id,
      title,
      artist_display,
      place_of_origin,
      thumbnail,
      gallery_title,
      gallery_id,
      department_title,
      department_id,
      image_id
    }

    openImage ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    openImage ? video.pause() : video.play();

    const saveImage = async() => {
      await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });
    }

  return (
     <>
     <PopupComponent
     openImage ={openImage}
     setOpenImage={setOpenImage}
     image_id={image_id}
     thumbnail={thumbnail}
     saveImage={saveImage}
     title={title}
     artist_display={artist_display}
     place_of_origin={place_of_origin}/>
    <Box className="image__card">
        <Image
          className='image__artwork'
          src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
          alt={thumbnail ? `${thumbnail.alt_text}` : "This text has no alt text"}
          width={300}
          height={300}
          onClick={() => setOpenImage(true)}
          priority />
      </Box></>
  )
  }

export default Artworks