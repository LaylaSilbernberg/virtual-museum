import { Delete, } from '@mui/icons-material'
import { IconButton, Box, Card, CardContent, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import Popup from 'reactjs-popup'
import { PopupComponentProps } from '../(Props)/props'
import Image from "next/image";
import Tilt from 'react-parallax-tilt';

const PersonalPopUp = ({deleteImage, openImage, setOpenImage, image_id, thumbnail, title, artist_display, place_of_origin}: PopupComponentProps) => {
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Popup 
    className='largeImage__popup'
    open={openImage} 
    closeOnDocumentClick 
    onClose={() => setOpenImage(false)}>
    <Box
      id='largeImage__container'
      className="largeImage__container"
      display="flex"
      rowGap="1rem"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      onClick={() => setOpenImage(false)}>
        <Tilt>
      <Image
        className='largeImage__artwork'
        src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
        alt={thumbnail ? `${thumbnail.alt_text}` : ""}
        width={300}
        height={300}
        style={
        matches ? {
          width: 500,
          height: 500
        }: undefined}
        priority />
        </Tilt>
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
  </Popup>
  )
}

export default PersonalPopUp