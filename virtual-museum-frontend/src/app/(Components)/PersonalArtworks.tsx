import React, {useState } from 'react'
import { Box, Card, CardContent, IconButton, Typography, useMediaQuery, useTheme} from '@mui/material';
import {PersonalArtworkProp} from '../(Props)/props'
import Image from "next/image";
import Popup from 'reactjs-popup';
import { Delete } from '@mui/icons-material';



const PersonalArtworks = ({id, image_id, title, place_of_origin, artist_display, thumbnail}: PersonalArtworkProp) => {

    const [openImage, setOpenImage] = useState<boolean>(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));


    openImage ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    //openImage ? video.pause() : video.play();

const deleteImage = async() =>{
    return null;
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
          alt={thumbnail ? `${thumbnail.altText}` : ""}
          width={300}
          height={300}
          style={matches ? {
            width: 500,
            height: 500
          }: undefined}
          onClick={() => setOpenImage(false)}
          priority />
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
              {thumbnail ? thumbnail.altText : ""}
            </Typography>
            <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '-1.5rem ',
              marginTop: '-0.5rem'
            }}>
          <IconButton
          color='error'
          size='large'
           aria-label='delete'
           onClick={deleteImage}>
            <Delete fontSize = "inherit"/>
          </IconButton>
        </Box>
          </CardContent>
        </Card>

      </Box>
    </Popup><div className="image__card">
        <Image
          className='image__artwork'
          src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
          alt={thumbnail ? `${thumbnail.altText}` : "This text has no alt text"}
          width={300}
          height={300}
          onClick={() => setOpenImage(true)}
          priority />
      </div></>
  )
  }

export default PersonalArtworks