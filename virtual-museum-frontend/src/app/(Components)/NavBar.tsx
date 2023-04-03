'use client'

import Link from 'next/link'
import React from 'react'
import { AppBar, Box, Container, Stack} from '@mui/material'
import { maxWidth } from '@mui/system'
import Image from 'next/image'

const NavBar = () => {
  return (
    <AppBar
    sx={{
      zIndex:'9998',
      width:'100%',
      background: 'linear-gradient(to bottom, #1D1D1D 10%, transparent 100%)',
      boxShadow: 'none'
    }}
    position='sticky'
    className="global__nav">
      <Box
          sx={{
            height:'4.5rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}
      maxWidth='xl'
      className='link__container'>
        <Image src={'https://upload.wikimedia.org/wikipedia/commons/3/32/Art_Institute_of_Chicago_logo.svg'} width={72} height={72} alt='Art Institute of Chicago logo'/>
        <Stack
        sx={{
          marginLeft: '1rem',
          columnGap: '1rem'
        }}
        direction={'row'}
        className='nav__link-stack'>
        <Link href={"/"} className="nav__links">Home</Link>
        <Link href={"/about"} className="nav__links">About</Link>
        <Link href={`/personalgallery/52`} className="nav__links">Personal Gallery</Link>
        </Stack>
        </Box>
    </AppBar>
  );
}

export default NavBar