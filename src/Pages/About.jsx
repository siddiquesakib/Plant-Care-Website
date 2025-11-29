import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Navbar from "../Component/Navbar";
import FooterComponent from "../Component/Footer";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <title>Plant Care | About</title> <Navbar />
      <div className="bg-linear-to-b from-green-50/50 via-white to-emerald-50/30 min-h-screen">
        <section className=" py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              We are deeply passionate about plants, Dedicated to helping you
              craft your perfect green space. Our mission is to nurture a closer
              bond with nature, Bringing the beauty and calm of the outdoors
              right into your home.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.pexels.com/photos/34368099/pexels-photo-34368099.jpeg"
              alt="Our Story"
              className="w-full rounded-3xl shadow-2xl object-cover h-80 md:h-[450px] transition-all duration-700 hover:scale-105 hover:shadow-green-200 border-4 border-white"
            />
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed text-lg">
                Founded with a love for greenery, we strive to provide the best
                plants and gardening advice for your home and office. Our team
                of plant experts carefully selects each plant to ensure quality
                and sustainability.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Whether you are a beginner or an experienced gardener, we are
                here to help you make your green dreams come true.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-linear-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
                <h3 className="text-2xl font-bold mb-4 text-green-700">
                  🌍 Sustainability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We promote eco-friendly practices and sustainable plant care
                  for a healthier planet.
                </p>
              </div>
              <div className="bg-linear-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
                <h3 className="text-2xl font-bold mb-4 text-green-700">
                  ✨ Quality
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every plant is carefully selected and nurtured to ensure
                  premium quality for our customers.
                </p>
              </div>
              <div className="bg-linear-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
                <h3 className="text-2xl font-bold mb-4 text-green-700">
                  🌟 Expert Guidance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team of plant experts provides reliable advice and support
                  to help your plants thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Join Our Plant Community
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Stay updated with tips, new arrivals, and plant care advice by
              subscribing to our newsletter.
            </p>
            <button className="cursor-pointer bg-linear-to-r from-green-600 to-emerald-500 text-white px-10 py-4 rounded-xl hover:from-green-700 hover:to-emerald-600 transition-all duration-300 text-center font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
              Subscribe Now
            </button>
          </div>
        </section>
      </div>
      <FooterComponent />
    </>
  );
};

export default About;
