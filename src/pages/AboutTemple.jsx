import React from 'react';
import { Helmet } from 'react-helmet-async';

function AboutTemple() {
  return (
    <>
      <Helmet>
        <meta name="description" content="चिखलदरा, महाराष्ट्र में वैराट देवी मंदिर के इतिहास, महत्व और पौराणिक कथाओं के बारे में जानें।" />
      </Helmet>

      <section className="text-gray-800 px-6 md:px-20 py-10 leading-relaxed">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <img src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301667/old-temple_ek6rkh.jpg"
                alt="पुराना वैराट देवी मंदिर" 
                className="w-full h-60 object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <p className="mt-2 font-medium text-gray-700">पुराना वैराट देवी मंदिर</p>
            </div>

            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301652/choti-vairat_pydpvy.jpg"
                alt="छोटी वैराट देवी मंदिर"
                className="w-full h-60 object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <p className="mt-2 font-medium text-gray-700">छोटी वैराट देवी मंदिर</p>
            </div>

            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dbvcpe9rf/image/upload/v1747301686/new-temple_ajtmun.jpg"
                alt="नया वैराट देवी मंदिर"
                className="w-full h-60 object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <p className="mt-2 font-medium text-gray-700">नया वैराट देवी मंदिर</p>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6">
            वैराट देवी : मेलघाट की रक्षक देवी
          </h1>

          <p className="mb-4">
            वैराट देवी को महाराष्ट्र के मेलघाट क्षेत्र की आदिवासी जनजातियों द्वारा <span className="font-semibold">कुलदेवी</span> के रूप में पूजा जाता है। हर वर्ष, विशेषकर <span className="italic">चैत्र</span> (मार्च–अप्रैल) के शुभ महीने में, हजारों श्रद्धालु उनके आशीर्वाद के लिए एकत्रित होते हैं।
          </p>

          <p className="mb-4">
            वैराट देवी को समर्पित मूल मंदिर <span className="font-semibold">वैराट</span> नामक एक दूरस्थ गाँव में स्थित था, जो सतपुड़ा पर्वत श्रृंखला की सबसे ऊँची चोटी पर था। यह प्राचीन स्थल पीढ़ियों से आदिवासियों के लिए आध्यात्मिक और सांस्कृतिक रूप से अत्यंत महत्वपूर्ण था। लेकिन हाल के वर्षों में, यह क्षेत्र <span className="font-semibold">मेलघाट टाइगर प्रोजेक्ट</span> के तहत एक संरक्षित वन क्षेत्र घोषित कर दिया गया, जिससे वहाँ प्रवेश वर्जित हो गया।
          </p>

          <p className="mb-4">
            <span className="font-semibold">चमत्कारिक रूप से</span>, वन विभाग द्वारा आधिकारिक रूप से मंदिर का मार्ग बंद किए जाने से एक वर्ष पहले ही समुदाय ने पहल करते हुए <span className="font-semibold">जय माता दी मंडल</span> के मार्गदर्शन में और चिखलदरा के निवासियों के सहयोग से <span className="font-semibold">छोटी वैराट देवी</span> का मंदिर विकसित किया और उसे <span className="font-semibold">एमएसईबी क्षेत्र</span> के पास नये मंदिर में परिवर्तित कर दिया।
          </p>

          <p className="mb-4">
            यह समय-संयोग स्वयं देवी का आशीर्वाद माना जाता है। नया मंदिर न केवल श्रद्धालुओं को पूजा का स्थान देता है बल्कि परंपराओं और आध्यात्मिक पहचान को भी जीवित रखता है, साथ ही वन्यजीव संरक्षण नियमों का पालन भी सुनिश्चित करता है।
          </p>

          <p className="mb-4">
            आज चिखलदरा का वैराट देवी मंदिर <span className="font-semibold">श्रद्धा, एकता और सांस्कृतिक दृढ़ता का प्रतीक</span> बन चुका है, जो परंपरा और पर्यावरण संरक्षण के बीच सुंदर संतुलन बनाता है।
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutTemple;
