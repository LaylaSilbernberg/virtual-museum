import React, {useState } from 'react'
import { Box, Button, Card, CardContent, IconButton, Typography, useMediaQuery, useTheme} from '@mui/material';
import { ArtworkProps } from '../(Props)/props'
import Image from "next/image";
import Popup from 'reactjs-popup';
import { FavoriteBorder, ThumbUp } from '@mui/icons-material';
import { Data } from '../(Interfaces)/interfaces';



const Artworks = ({id, image_id, title, artist_display, place_of_origin, thumbnail, gallery_title, gallery_id, department_title, department_id}: ArtworkProps) => {

    const [openImage, setOpenImage] = useState<boolean>(false);
    const video: HTMLVideoElement = document.querySelector(".background__video")!;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
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
     <Popup open={openImage} closeOnDocumentClick onClose={() => setOpenImage(false)}>
      <Box
        id='largeImage__container'
        className="largeImage__container"
        display="flex"
        rowGap="1rem"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <Image
          className='largeImage__artwork'
          src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
          alt={thumbnail ? `${thumbnail.alt_text}` : ""}
          width={300}
          height={300}
          style={matches ? {
            width: 500,
            height: 500
          }: undefined}
          onClick={() => setOpenImage(false)}
          priority 
          />
        <Card
          className='largeImage__textCard'
          sx={{ width: {
            xs: 300,
            sm: 500}}}
        >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Title: {title}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Artist: {artist_display}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Origin: {place_of_origin}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {thumbnail ? thumbnail.alt_text : ""}
            </Typography>
            <Box
            sx={{
              marginBottom: '-1.5rem ',
              marginTop: '-0.5rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
          <IconButton
          color='secondary'
          size='large'
           aria-label='like'
           onClick={saveImage}>
            <FavoriteBorder fontSize='inherit'/>
          </IconButton>
        </Box>
          </CardContent>
        </Card>

      </Box>
    </Popup><div className="image__card">
        <Image
          className='image__artwork'
          src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
          alt={thumbnail ? `${thumbnail.alt_text}` : "This text has no alt text"}
          width={300}
          height={300}
          onClick={() => setOpenImage(true)}
          priority />
      </div></>
  )
  }

export default Artworks