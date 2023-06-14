import React from 'react'

const Footer = () => {
const year=new Date();
  return (
    <footer>Copyrights &copy; {year.getFullYear()}</footer>
  )
}

export default Footer