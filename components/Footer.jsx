import React from 'react'

const Footer = () => {
  return (
    <footer className='flex px-4 py-2 sm:px-10 sm:py-5 items-center justify-center gap-8'>
        <h2 className='font-bold text-md sm:text-2xl text-Primary-Color'>&copy; KANAKA DURGA CONSULTANCY SERVICES</h2>
        <h2 className='font-bold text-md sm:text-2xl text-Primary-Color'>{new Date().getFullYear()}</h2>
    </footer>
  )
}

export default Footer