import React, {useEffect, useState } from 'react'
import { Box, Grid, Grow, useMediaQuery, useTheme} from '@mui/material';
import {PersonalArtworkProp} from '../(Props)/props'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import PersonalPopUp from './PersonalPopUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const PersonalArtworks = ({id, paramId, image_id, title, place_of_origin, artist_display, thumbnail}: PersonalArtworkProp) => {

    const [openImage, setOpenImage] = useState<boolean>(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const video: HTMLVideoElement = document.querySelector(".background__video")!;
    const url = `https://virtualmuseumappreal.azurewebsites.net/api/getGallery/deleteImage/${paramId}?imageId=${id}`
    const router = useRouter();
    const [hideImage, setHideImage] = useState<boolean>(false)
    const [appear, setAppear] = useState<boolean>(false)

    openImage ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    openImage ? video.pause() : video.play();

    useEffect(() => setAppear(true), [])



const deleteImage = async() =>{
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Origin' : '*'
    }
  }).then(() => {setHideImage(true),
    setOpenImage(false),
  toast('Image has been deleted')});
}

  return (

    !hideImage ? <Grid item
    xs={12}
    sm={6}
    md={4}
    lg={3}>
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
         <Grow 
     in={appear}
    {...(appear ? { timeout: 1000 } : {})}>
    <Box className="image__card">
        <Image
          className='image__artwork'
          src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
          alt={thumbnail ? `${thumbnail!.altText}` : "This text has no alt text"}
          width={300}
          height={300}
          onClick={() => setOpenImage(true)}
          priority />
      </Box>
      </Grow>
      </Grid> : null
          
          )
  }

export default PersonalArtworks