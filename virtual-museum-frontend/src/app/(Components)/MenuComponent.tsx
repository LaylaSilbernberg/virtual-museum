import { Box, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Link from 'next/link'

const MenuComponent = () => {

  const themes = useTheme()
  const matches = useMediaQuery(themes.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      <>
        <Button
        className='departments__button'
          id="positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={matches ? {
            letterSpacing: '0',
            textTransform: 'none',
            padding: '0',
            maxWidth: 'fit-content',
            minWidth: 'content',
            fontSize: 'smaller',
            textAlign: 'center',
            lineHeight: '1.37em'

          }: {
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '1rem 1.25rem',
          textAlign: 'center',
          lineHeight: '1.37em'
        }}
          sx={{
          color: 'white',
        fontSize: 'medium', 
    width: 'fit-content',
  height: 'fit-content'}}
        >
          Departments
        </Button>
        <Menu
        className='positioned__menu'
          id="positioned-menu"
          aria-labelledby="positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{zIndex: '9999',
          textDecoration: 'none'}}
          PaperProps={{
            style: {
              maxHeight: '10rem',
            },
          }}
        >
          <MenuItem onClick={handleClose}><Link className='menuitem__navbar' href={'/PC-1'}>Arts of Africa</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='menuitem__navbar' href={'/PC-3'}>Arts of the Americas</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='menuitem__navbar' href={'/PC-4'}>Arts of the Ancient Mediterranean and Byzantium</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='menuitem__navbar' href={'/PC-5'}>Architecture and Design</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='menuitem__navbar' href={'/PC-7'}>Art of Asia</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='menuitem__navbar' href={'/PC-8'}>Contemporary Art</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='menuitem__navbar' href={'/PC-9'}>Applied Arts of Europe</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='menuitem__navbar' href={'/PC-10'}>Paintings and Sculptures of Europe</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='menuitem__navbar' href={'/PC-11'}>Modern Art</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='menuitem__navbar' href={'/PC-12'}>Photography and Media</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='menuitem__navbar' href={'/PC-13'}>Prints and Drawings</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='menuitem__navbar' href={'/PC-14'}>Textiles</Link></MenuItem>
        </Menu>
      </>
    );
}

export default MenuComponent