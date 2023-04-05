'use client'

import React, { useEffect, useState } from 'react'
import { Data } from '../(Interfaces)/interfaces';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import Artworks from '../(Components)/Artworks';
import { ArrowForwardIos, East, NorthEast, South, SouthEast } from '@mui/icons-material';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const ArtsOfAfrica = () => {
    const [page, setPage] = useState<Data[]>();
    const router = useRouter();

    const getSpecificDepartment = async() => {
        const limit=16;
        const maxPages=62;
        const fields = "id,title,place_of_origin,department_title,thumbnail,department_id,artist_display,image_id";
        const url = `https://api.artic.edu/api/v1/artworks/search?q=Arts Of Africa&fields=${fields}&limit=${limit}&page=${Math.floor(Math.random() * maxPages)}`;

        const result = await (await fetch(url)).json();
        setPage(result.data)
    }

    useEffect(() => {getSpecificDepartment()}, [])

  return (
    <>
    <Image
      height={0}
      width={0}
      src={'https://images.pexels.com/photos/13255266/pexels-photo-13255266.jpeg'
      }
      alt='Image of a gallery with a classical statue front and center'
      style={{
        position: 'fixed',
        right: '0',
        bottom: '0',
        minWidth: '100%',
        minHeight: '100%',
        zIndex: '-1'
      }}/>
    
    <main
      className='PC__page'>

      <Box
        display={'flex'}
        justifyContent={'center'}
        sx={{
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          padding: '1rem 1.25rem',
          color: 'white'
        }}>
        <Typography
          sx={{ borderBottom: 'solid white 0.125rem' }}
          variant='h2'><Link
            style={{
              textDecoration: 'none',
              color: 'white'
            }}
            href={'/PC-1'}>Arts of Africa</Link></Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          flexDirection: 'row',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          top: '13.5vh'
        }}>
        <IconButton
          sx={{
            color: 'white',
            position: 'absolute', fontSize: 'xxx-large'
          }}
          size='large'
          onClick={() => router.push('/PC-1/Room1')}>
          <East
            fontSize='inherit' />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          flexDirection: 'row',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          top: '90vh'
        }}>
        <IconButton
          sx={{
            color: 'white',
            position: 'absolute', fontSize: 'xxx-large'
          }}
          size='large'
          onClick={() => router.push('/PC-3')}>
          <ArrowForwardIos
            fontSize='inherit' />
        </IconButton>
      </Box>
      <Grid container
        className='gallery__grid'
      >
        {page?.filter((element) => element.image_id).map((element) => {
          return <Artworks
            key={element.id}
            id={1}
            department_title={element.department_title}
            department_id={element.department_id}
            thumbnail={element.thumbnail}
            artist_display={element.artist_display}
            title={element.title}
            place_of_origin={element.place_of_origin}
            image_id={element.image_id} />;
        })}
      </Grid>


      <Box
        sx={{
          position: 'absolute',
          flexDirection: 'row',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <IconButton
          sx={{
            color: 'white',
            position: 'absolute', fontSize: 'xxx-large'
          }}
          size='large'
          onClick={() => router.push('/PC-1/Room2')}>
          <South
            fontSize='inherit' />
        </IconButton>
      </Box>
    </main></>
  )
}

export default ArtsOfAfrica