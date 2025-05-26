import React from 'react';
import { Helmet } from 'react-helmet-async';

function Events() {
  return (
    <>
      <Helmet>
        <meta name="description" content="चिखलदरा के वैराट देवी मंदिर में आने वाले सभी उत्सवों, पूजाओं और कार्यक्रमों की जानकारी पाएं।" />
      </Helmet>

      <h1 className="text-3xl font-bold m-6 text-center text-orange-700">जीर्णोद्धार की झलकियाँ</h1>       

      <section className="text-gray-800 px-6 md:px-20 py-10 leading-relaxed">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300561/shobhayatra_el6kjx.jpg" alt="शोभा यात्रा" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">शोभा यात्रा</p>
            </div>

            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300490/mahila-kalash_sx36tu.jpg" alt="महिला कलश यात्रा" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">महिला कलश यात्रा</p>
            </div>

            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300522/pooja_tktrvc.jpg" alt="पूजा" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">पूजा</p>
            </div>

            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300404/navgrah-pooja_tz2qig.jpg" alt="नवग्रह पूजा" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">नवग्रह पूजा</p>
            </div>

            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300345/snapan_hqxk9s.jpg" alt="स्नपन" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">स्नपन</p>
            </div>

            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300380/dhanyavas_wpkaab.jpg" alt="धन्यवाद" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">धन्यवाद</p>
            </div>

            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300338/phoolvas_jgu1u8.jpg" alt="फूलवस" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">फूलवस</p>
            </div>

            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300469/nyas_ltfbkf.jpg" alt="न्यास" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">न्यास</p>
            </div>

            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300442/dhatumurti_mwfzb1.jpg" alt="धातुमूर्ति" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">धातुमूर्ति</p>
            </div>

            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300523/yagnamandap_jamuea.jpg" alt="यज्ञ मंडप" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">यज्ञ मंडप</p>
            </div>

            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747302936/murtisthapna_ngdaro.jpg" alt="मूर्ति स्थापना" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">मूर्ति स्थापना</p>
            </div>

            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300330/Gumbaj-kalash_kaagsp.jpg" alt="गुंबज कलश" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">गुंबज कलश</p>
            </div>

            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747300404/pratham-aarti_hjntda.jpg" alt="प्रथम आरती" className="w-full h-100 object-cover rounded-xl shadow-md" loading="lazy" />
              <p className="mt-2 font-medium text-gray-700">प्रथम आरती</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Events;
