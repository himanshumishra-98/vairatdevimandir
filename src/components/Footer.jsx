import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-amber-100'>
      <div className="mt-1 pt-2 text-center text-xs text-gray-600">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <div className="flex justify-center gap-6 items-center">
            <a href='https://www.instagram.com/shree_vairat_devi_mandir/'><img src='/instagram.png' className='w-6 h-6' /></a>
            <a href='https://maps.app.goo.gl/QLDpmNDyMeAzTeWQA'><img src='/google-maps.png' className='w-6 h-6' /></a>
            <a href="mailto:shreevairatdevimandirsansthan@gmail.com"       ><img src='/gmail.png' className='w-6 h-6' /></a>
          </div>
      </div>
      <div className="border-t mt-2 pt-2 text-center text-xs text-gray-600">
        © {new Date().getFullYear()}  All rights reserved by Shree Vairat Devi Mandir Sansthan, Chikhaldara, Maharashtra, India 
      </div>
    </div>
  )
}

export default Footer;
