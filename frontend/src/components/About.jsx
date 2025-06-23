import React from "react";
import aboutbanner from '../assets/about_banner.jpg';
import { CalendarSync, Aperture, Drone, Backpack   } from "lucide-react";
function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 md:mt-28 mt-5">
        {/* Hero Section */}
        <section className="">
          <h1 className="text-2xl md:text-4xl text-center">
            About Our Books <span className="text-pink-500"> store!!</span> 
          </h1>

          <section className="py-16 px-6 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-gray-100">
    
    {/* Left Side - Text */}
    <div className="order-2 md:order-1 w-full md:w-2/3 px-5">
      
      <p className="leading-relaxed text-xl">
        Explore a rich and diverse collection of books that cater to every interest and need — from classic novels and inspiring
        religious texts to practical health guides and doctor-recommended prescriptions. Whether you're seeking entertainment,
        spiritual growth, or wellness support, our platform offers both free and premium titles, thoughtfully curated for you.
      </p>
    </div>

    {/* Right Side - Image */}
    <div className="order-1 md:order-2 w-full md:w-1/2 flex md:justify-end justify-center">
      
      <img src={aboutbanner} alt="Books collection"   className="shadow-md w-full max-w-md" />
      
    </div>

  </div>
</section>

        </section>

        {/* Project Description */}
        <section className="py-12 px-6 max-w-full mx-auto">
          <h2 className="font-semibold text-xl mb-5">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            This project is built to make knowledge and literature accessible to
            everyone. Whether you're looking for spiritual growth, lifestyle
            improvement, or medical references, our platform offers both free
            and premium books to meet your needs.
          </p>
        </section>

         {/* Free vs Premium */}
        <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Free Books</h3>
            <p className="">
              Access a wide selection of completely free books — including basic
              health guides, public domain novels, and religious texts.
            </p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Premium Books</h3>
            <p className="">
              Explore exclusive books curated by experts and professionals —
              including advanced medical references, rare literature, and
              specialized topics.
            </p>
          </div>
        </section>

        {/* Book Categories */}
        <section className="py-12 bg-white px-6">
          <h2 className="text-xl font-semibold mb-8">
            Book Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {[
              "Novels",
              "Religious",
              "Health",
              "Food",
              "Prescriptions",
              "More...",
            ].map((cat, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <p className="font-medium">{cat}</p>
              </div>
            ))}
          </div>
        </section>

       

         {/* CTA */}
        <section className="py-12 bg-pink-600 text-white text-center px-6">
          <h2 className="text-3xl font-semibold mb-4">
            Start Exploring Books Now
          </h2>
          <p className="mb-6">
            Dive into knowledge, inspiration, and stories that matter. Browse
            now!
          </p>
          <button className="bg-white text-pink-600 px-6 py-2 rounded font-medium hover:bg-gray-100 transition">
            Browse Books
          </button>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 bg-white px-6 max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-8">
            Why Choose Us? 
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="bg-gray-100 p-5 rounded shadow flex items-center">
              
             <CalendarSync className="w-10 h-10 text-pink-500 mt-1 mr-3" />  Carefully curated content
            </li>
            <li className="bg-gray-100 p-5 rounded shadow flex items-center">
              
              <Aperture className="w-10 h-10 text-pink-500 mt-1 mr-3" /> Both free and premium options
            </li>
            <li className="bg-gray-100 p-5 rounded shadow flex items-center">
              
              <Drone  className="w-10 h-10 text-pink-500 mt-1 mr-3" /> Trusted by readers and professionals
            </li>
            <li className="bg-gray-100 p-5 rounded shadow flex items-center">
              
              <Backpack  className="w-10 h-10 text-pink-500 mt-1 mr-3" /> Regularly updated book collection
            </li>
          </ul>
        </section>

       
      </div>
    </>
  );
}

export default About;
