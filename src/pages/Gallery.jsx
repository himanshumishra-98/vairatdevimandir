import React from 'react'
import { Helmet } from 'react-helmet-async'

function Gallery() {
  return (
    <>

      <Helmet>
        <meta name="description" content="View beautiful photos of Vairat Devi Temple, Chikhaldara, including festivals, architecture, and scenic views." />
      </Helmet>
      <h1 className="text-3xl font-bold m-6 text-center text-orange-700">Navratri - 9 Days 9 Colours 9 Energies</h1>       
        <section className="text-gray-800 px-6 md:px-20 py-10 leading-relaxed">
          <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
               <img
                src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301270/shailputri_gchvu1.jpg"
                alt="Shailputri"
                className="w-full h-100 object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <p className="mt-2 font-medium text-gray-700">Maa Shailputri</p>
            </div>

            <div className="text-center">
               <img
                src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301262/bramhacharini_yntebb.jpg"
                alt="Brahmacharini"
                className="w-full h-100 object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <p className="mt-2 font-medium text-gray-700">Maa Brahmacharini</p>
            </div>

            <div className="text-center">
               <img
                src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301273/chandraghanta_zidb0v.jpg"
                alt="Chandraghanta"
                className="w-full h-100 object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <p className="mt-2 font-medium text-gray-700">Maa Chandraghanta</p>            
            </div>

            <div className="text-center">
               <img
                src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301257/kushmanda_nxcupf.jpg"
                alt="Kushmanda"
                className="w-full h-100 object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <p className="mt-2 font-medium text-gray-700">Maa Kushmanda</p>            
            </div>

            <div className="text-center">
               <img
                src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301259/skandmata_k9polp.jpg"
                alt="Skandamata"
                className="w-full h-100 object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <p className="mt-2 font-medium text-gray-700">Maa Skandamata</p>            
            </div>

            <div className="text-center">
               <img
                src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301270/katyayani_u42aho.jpg"
                alt="Katyayani"
                className="w-full h-100 object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <p className="mt-2 font-medium text-gray-700">Maa Katyayani</p>            
            </div>

            <div className="text-center">
               <img
                src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301276/kaalratri_d0vf26.jpg"
                alt="Kaalratri"
                className="w-full h-100 object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <p className="mt-2 font-medium text-gray-700">Maa Kaalratri</p>            
            </div>

            <div className="text-center">
               <img
                src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301263/mahagauri_qjhxpq.jpg"
                alt="Mahagauri"
                className="w-full h-100 object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <p className="mt-2 font-medium text-gray-700">Maa Mahagauri</p>            
            </div>

            <div className="text-center">
               <img
                src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301275/siddhidatri_lyuf8a.jpg"
                alt="Siddhidatri"
                className="w-full h-100 object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <p className="mt-2 font-medium text-gray-700">Maa Siddhidatri</p>            
            </div>

            </div>
            </div>
            </section>
    </>
  )
}

export default Gallery
