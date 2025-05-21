import React from 'react';
import { Helmet } from 'react-helmet-async';

function AboutTemple() {
  return (
    <>

      <Helmet>
        <meta name="description" content="Learn about the history, significance, and legends of Vairat Devi Temple in Chikhaldara, Maharashtra." />
      </Helmet>

      <section className="text-gray-800 px-6 md:px-20 py-10 leading-relaxed">
      <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="text-center">
            <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301667/old-temple_ek6rkh.jpg"
              alt="Old Vairat Devi Temple" 
              className="w-full h-60 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Old Vairat Devi Temple</p>
          </div>

          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301652/choti-vairat_pydpvy.jpg"
              alt="Choti Vairat Devi Temple"
              className="w-full h-60 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">Choti Vairat Devi Temple</p>
          </div>

          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301686/new-temple_ajtmun.jpg"
              alt="New Vairat Devi Temple"
              className="w-full h-60 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
            <p className="mt-2 font-medium text-gray-700">New Vairat Devi Temple</p>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6">
          Vairat Devi : The Guardian Goddess of Melghat’s Tribal Community
        </h1>
        <p className="mb-4">
          Vairat Devi is worshipped as the{" "}
          <span className="font-semibold">Kuldevi</span> (clan or ancestral goddess) by the tribal
          communities of the Melghat region in Maharashtra. Every year, especially during the
          auspicious month of <span className="italic">Chaitra</span> (March–April), thousands of
          devotees gather to seek her blessings in a grand celebration of faith and tradition.
        </p>

        <p className="mb-4">
          The original temple dedicated to Vairat Devi was located in a remote village called{" "}
          <span className="font-semibold">Vairat</span>, perched on the highest peak of the Satpura
          mountain range. This ancient site held deep spiritual and cultural significance for
          generations of Adivasis. However, in recent years, this area was designated as part of the{" "}
          <span className="font-semibold">Melghat Tiger Project</span>, a critical conservation zone
          for wildlife. As a result, entry to the original temple became restricted by forest
          authorities to protect the delicate ecosystem.
        </p>

        <p className="mb-4">
          <span className="font-semibold">Miraculously</span>, just a year before the forest
          department officially closed access to the original site, the community had already taken
          proactive steps. With the initiative of the{" "}
          <span className="font-semibold">Jai Mata Di Mandal</span>—a local religious and cultural
          organization—and the collective efforts of the residents of Chikhaldara, the temple of{" "}
          <span className="font-semibold">Choti Vairat Devi</span> itself was renovated and
          developed into the new Vairat Devi temple within the town of Chikhaldara, near the{" "}
          <span className="font-semibold">MSEB area</span>.
        </p>

        <p className="mb-4">
          This divine timing is seen by many as a blessing of the goddess herself. The new temple
          not only continues to serve as a sacred space for worship but also preserves the
          long-standing customs and spiritual identity of the community. It ensures that devotees
          can still connect with their deity without violating conservation laws or disturbing
          protected forest areas.
        </p>

        <p className="mb-4">
          Today, the Vairat Devi temple in Chikhaldara stands as a{" "}
          <span className="font-semibold">symbol of faith, unity, and cultural resilience</span>,
          beautifully blending age-old tradition with the evolving needs of environmental
          protection.
        </p>
      </div>
    </section>
    </>
  )
}

export default AboutTemple
