import React, {useState } from 'react'
import { Box, Card, CardContent, IconButton, Typography, useMediaQuery, useTheme} from '@mui/material';
import {PersonalArtworkProp} from '../(Props)/props'
import Image from "next/image";
import Popup from 'reactjs-popup';
import { Delete } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import PersonalPopUp from './PersonalPopUp';




const PersonalArtworks = ({id, paramId, image_id, title, place_of_origin, artist_display, thumbnail}: PersonalArtworkProp) => {

    const [openImage, setOpenImage] = useState<boolean>(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const video: HTMLVideoElement = document.querySelector(".background__video")!;
    const url = `http://localhost:8080/api/deleteImage/${paramId}?imageId=${id}`
    const router = useRouter();
    const [hideImage, setHideImage] = useState<boolean>(false)

    openImage ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    openImage ? video.pause() : video.play();



const deleteImage = async() =>{
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Origin' : '*'
    }
  }).then(() => {setHideImage(true)
    setOpenImage(false)});
}

  return (

    !hideImage ? <>
    <PersonalPopUp
    openImage={openImage}
    setOpenImage={setOpenImage}
    deleteImage={deleteImage}
    image_id={image_id}
    thumbnailDto={thumbnail}
    title={title}
    artist_display={artist_display}
    place_of_origin={place_of_origin}

    />
    <Box className="image__card">
        <Image
          className='image__artwork'
          src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
          alt={thumbnail ? `${thumbnail!.altText}` : "This text has no alt text"}
          width={300}
          height={300}
          onClick={() => setOpenImage(true)}
          priority />
      </Box></> : null
          
          )
  }

export default PersonalArtworks