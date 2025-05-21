import React from 'react'
import { Helmet } from 'react-helmet-async'


function Donate() {
  return (
    <>

      <Helmet>
        <meta name="description" content="Support the Vairat Devi Temple by making a donation. Your contributions help maintain temple services and events." />
      </Helmet>

      <div className="bg-orange-50 text-gray-800 py-10 px-4 sm:p  x-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center border border-orange-  300 rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">
            Temple Donation Contact
          </h2>
          <p className="text-lg mb-6">
            For temple donations and related inquiries, please contact:
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-xl font-semibold">Purushottam Mishra</p>
              <p className="text-lg">
                📞 Mobile: <a href="tel:9823702164" className="text-blue- 600 underline">+91 9823702164</a>
            </p>
            </div>

            <div>
              <p className="text-xl font-semibold">Aashish Choube</p>
              <p className="text-lg">
                📞 Mobile: <a href="tel:9421739615" className="text-blue- 600 underline">+91 9421739615</a>
            </p>
            </div>

            <div>
              <p className="text-xl font-semibold">Suraj Tiwari</p>
              <p className="text-lg">
                📞 Mobile: <a href="tel:9096146246" className="text-blue- 600 underline">+91 9096146246</a>
            </p>
            </div>

            <div>
              <p className="text-xl font-semibold">Aashish Pal</p>
              <p className="text-lg">
                📞 Mobile: <a href="tel:8007393387" className="text-blue- 600 underline">+91 8007393387</a>
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
);
  
}

export default Donate
