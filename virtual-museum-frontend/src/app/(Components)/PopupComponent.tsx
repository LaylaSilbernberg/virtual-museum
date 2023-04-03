import { Bookmark, BookmarkBorder, FavoriteBorder, StarBorder } from '@mui/icons-material'
import { Card, IconButton, Box, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material'
import title from 'material-ui/svg-icons/editor/title'
import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import { PopupComponentProps } from '../(Props)/props'
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import { zIndex } from 'material-ui/styles'

const PopupComponent = ({saveImage, openImage, setOpenImage, image_id, thumbnail, title, artist_display, place_of_origin}: PopupComponentProps) => {
const theme = useTheme();
const [bookMark, setBookmark] = useState<boolean>(false);
const matches = useMediaQuery(theme.breakpoints.up('sm'));


  return (
    <Popup 
    className='largeImage__popup'
    open={openImage} 
    closeOnDocumentClick>
    <Box
      id='largeImage__container'
      className="largeImage__container"
      display="flex"
      rowGap="1rem"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
        <Tilt>
      <Image
        className='largeImage__artwork'
        src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
        alt={thumbnail ? `${thumbnail.alt_text}` : ""}
        width={300}
        height={300}
        style={matches ? {
          width: 500,
          height: 500,
          zIndex: '9999'
        }: undefined}
        onClick={() => setOpenImage(false)}
        priority 
        />
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
            marginBottom: '-1.5rem ',
            marginTop: '-0.5rem',
            display: 'flex',
            justifyContent: 'center'
          }}>
        <IconButton
        size='large'
         aria-label='like'
         onClick={() => {saveImage!(); 
         setBookmark(true)}}>
         {!bookMark ? <BookmarkBorder
          sx={{color: 'black'}}
           fontSize='inherit'/> 
           : 
           <Bookmark
          sx={{color: 'black'}}
           fontSize='inherit'/>}
        </IconButton>
      </Box>
        </CardContent>
      </Card>
    </Box>
  </Popup>
  )
}

export default PopupComponent