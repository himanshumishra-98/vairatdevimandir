import React from 'react'
import { Helmet } from 'react-helmet-async'

function Events() {
  return (
    <>

      <Helmet>
        <meta name="description" content="Stay updated with all upcoming festivals, poojas, and events at Vairat Devi Temple in Chikhaldara." />
      </Helmet>

      <h1 className="text-3xl font-bold m-6 text-center text-orange-700">Jirnoddhar Photos</h1>       
      <section className="text-gray-800 px-6 md:px-20 py-10 leading-relaxed">
        <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="text-center">
             <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300561/shobhayatra_el6kjx.jpg"
              alt="Shobha Yatra"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Shobhayatra</p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300490/mahila-kalash_sx36tu.jpg"
              alt="Mahila Kalash"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Mahila Kalash Yatra</p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300522/pooja_tktrvc.jpg"
              alt="Pooja"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Pooja</p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300404/navgrah-pooja_tz2qig.jpg"
              alt="Navgrah Pooja"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Navgrah Pooja</p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300345/snapan_hqxk9s.jpg"
              alt="Snapan"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Snapan</p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300380/dhanyavas_wpkaab.jpg"
              alt="Dhanyavas"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Dhanyavas</p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300338/phoolvas_jgu1u8.jpg"
              alt="phoolvas"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Phoolvas</p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300469/nyas_ltfbkf.jpg"
              alt="nyas"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Nyas</p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300442/dhatumurti_mwfzb1.jpg"
              alt="dhatumurti"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Dhatumurti</p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300523/yagnamandap_jamuea.jpg"
              alt="yagnamandap"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Yagna Mandap</p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747302936/murtisthapna_ngdaro.jpg"
              alt="murtisthapna"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Murti Sthapna</p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300330/Gumbaj-kalash_kaagsp.jpg"
              alt="gumbaj"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Gumbaj Kalash</p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300404/pratham-aarti_hjntda.jpg"
              alt="firstaarti"
              className="w-full h-100 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Pratham Aarti</p>
          </div>
        </div>
        </div>
    </section>
      
      
    </>
  )
}

export default Events
