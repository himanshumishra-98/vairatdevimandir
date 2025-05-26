import React from 'react';
import { Helmet } from 'react-helmet-async';

function Donate() {
  return (
    <>
      <Helmet>
        <meta name="description" content="वैराट देवी मंदिर का समर्थन करने के लिए दान करें। आपके योगदान से मंदिर की सेवाओं और आयोजनों का संचालन होता है।" />
      </Helmet>

      <div className="bg-orange-50 text-gray-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center border border-orange-300 rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            मंदिर दान संपर्क
          </h2>
          <p className="text-lg mb-6">
            मंदिर दान और संबंधित पूछताछ के लिए कृपया संपर्क करें:
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-xl font-semibold">पुरुषोत्तम मिश्रा</p>
              <p className="text-lg">
                📞 मोबाइल: <a href="tel:9823702164" className="text-blue-600 underline">+91 9823702164</a>
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold">आशीष चौबे</p>
              <p className="text-lg">
                📞 मोबाइल: <a href="tel:9421739615" className="text-blue-600 underline">+91 9421739615</a>
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold">सूरज तिवारी</p>
              <p className="text-lg">
                📞 मोबाइल: <a href="tel:9096146246" className="text-blue-600 underline">+91 9096146246</a>
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold">आशीष पाल</p>
              <p className="text-lg">
                📞 मोबाइल: <a href="tel:8007393387" className="text-blue-600 underline">+91 8007393387</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;
