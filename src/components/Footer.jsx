import React from 'react'

function Footer() {
  return (
    <div className='bg-amber-100'>
      <div className="mt-1 pt-2 text-center text-xs text-gray-600">
          <h4 className="text-lg font-semibold mb-2">संपर्क करें</h4>
          <div className="flex justify-center gap-6 items-center">
            <a href='https://www.instagram.com/shree_vairat_devi_mandir/'><img src='/instagram.png' className='w-6 h-6' alt='Instagram' /></a>
            <a href='https://maps.app.goo.gl/QLDpmNDyMeAzTeWQA'><img src='/google-maps.png' className='w-6 h-6' alt='Google Maps' /></a>
            <a href="mailto:shreevairatdevimandirsansthan@gmail.com"><img src='/gmail.png' className='w-6 h-6' alt='Email' /></a>
          </div>
      </div>
      <div className="border-t mt-2 pt-2 pb-12 lg:pb-2 text-center text-xs text-gray-600">
        © {new Date().getFullYear()}  सभी अधिकार श्री वैराट देवी मंदिर संस्थान, चिखलदरा, महाराष्ट्र, भारत के अधीन सुरक्षित हैं
      </div>
    </div>
  )
}

export default Footer;
