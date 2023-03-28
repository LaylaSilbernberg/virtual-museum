import React, { ForwardRefExoticComponent, Ref, useEffect, useRef, useState } from 'react'
import { Box, Card, CardContent, Typography} from '@mui/material';
import { ArtworkProps } from '../(Props)/props'
import Image from "next/image";
import Popup from 'reactjs-popup';



const Artworks = ({image_id, title, artist_display, place_of_origin, thumbnail}: ArtworkProps) => {

    const [openImage, setOpenImage] = useState<boolean>(false);

    openImage ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";    

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
                  alt={thumbnail.alt_text? `${thumbnail.alt_text}`: ""}
                  width={500}
                  height={500}
                  onClick={() => setOpenImage(false)}
                  priority
                  />
      <Card
      className='largeImage__textCard'
      sx={{ maxWidth: 500 }}
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
          {thumbnail.alt_text}
        </Typography>
        </CardContent>
      </Card>
      </Box>
    </Popup>
    
      <div className="image__card">
              <Image
                  className='image__artwork'
                  src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
                  alt={thumbnail.alt_text ? `${thumbnail.alt_text}` : "This text has no alt text"}
                  width={300}
                  height={300}
                  onClick={() => setOpenImage(true)}
                  priority />
        </div></>
  )
}

export default Artworks