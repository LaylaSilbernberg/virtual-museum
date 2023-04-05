'use client'

import NavBar from './(Components)/NavBar'
import './globals.css'
import './(CSS)/Gallery.css'
import { ToastContainer } from 'react-toastify'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ToastContainer
      toastStyle={{}} />
        <header className='global__header'>
          <NavBar />
        </header>
        {children}
        </body>
    </html>
  )
}
