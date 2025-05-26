import React from 'react';
import { Helmet } from 'react-helmet-async';

function Gallery() {
  const deviForms = [
    {
      src: "https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301270/shailputri_gchvu1.jpg",
      alt: "माँ शैलपुत्री",
      label: "माँ शैलपुत्री"
    },
    {
      src: "https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301262/bramhacharini_yntebb.jpg",
      alt: "माँ ब्रह्मचारिणी",
      label: "माँ ब्रह्मचारिणी"
    },
    {
      src: "https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301273/chandraghanta_zidb0v.jpg",
      alt: "माँ चंद्रघंटा",
      label: "माँ चंद्रघंटा"
    },
    {
      src: "https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301257/kushmanda_nxcupf.jpg",
      alt: "माँ कूष्मांडा",
      label: "माँ कूष्मांडा"
    },
    {
      src: "https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301259/skandmata_k9polp.jpg",
      alt: "माँ स्कंदमाता",
      label: "माँ स्कंदमाता"
    },
    {
      src: "https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301270/katyayani_u42aho.jpg",
      alt: "माँ कात्यायनी",
      label: "माँ कात्यायनी"
    },
    {
      src: "https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301276/kaalratri_d0vf26.jpg",
      alt: "माँ कालरात्रि",
      label: "माँ कालरात्रि"
    },
    {
      src: "https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301263/mahagauri_qjhxpq.jpg",
      alt: "माँ महागौरी",
      label: "माँ महागौरी"
    },
    {
      src: "https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301275/siddhidatri_lyuf8a.jpg",
      alt: "माँ सिद्धिदात्री",
      label: "माँ सिद्धिदात्री"
    },
  ];

  return (
    <>
      <Helmet>
        <title>वैराट देवी मंदिर गैलरी | नवरात्रि - 9 दिन 9 शक्तियाँ</title>
        <meta name="description" content="चिखलदरा स्थित वैराट देवी मंदिर की सुंदर गैलरी देखें - नवरात्रि के दौरान नौ देवी रूपों की झलकियों सहित।" />
        <link rel="canonical" href="https://vairatdevimandirsansthan.netlify.app/gallery" />
      </Helmet>

      <h1 className="text-3xl font-bold m-6 text-center text-orange-700">नवरात्रि - 9 दिन, 9 रंग, 9 शक्तियाँ</h1>

      <section className="text-gray-800 px-6 md:px-20 py-10 leading-relaxed" aria-label="नवरात्रि देवी गैलरी">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {deviForms.map((devi, index) => (
              <div key={index} className="text-center">
                <img
                  src={devi.src}
                  alt={devi.alt}
                  className="w-full h-100 object-cover rounded-xl shadow-md"
                  loading="lazy"
                />
                <p className="mt-2 font-medium text-gray-700">{devi.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
