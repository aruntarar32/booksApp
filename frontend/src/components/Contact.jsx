import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 md:mt-20 mt-5'>

    <section className="mt-12 pt-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-pink-600">Contact Us</h2>
         <p className='pt-5'>We would love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out.
          <br />
          Our team will get back to you as soon as possible.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto ">
        {/* Contact Info */}
        <div className="space-y-6">
            <div className="flex items-start space-x-5">
            
            <div>
             <h2 className="text-3xl font-bold =">Get in touch with us</h2>
             
            </div>
          </div>

          <div className="flex items-start space-x-5 shadow-md px-4 py-10 border border-pink-300 rounded-lg">
            <Mail className="w-6 h-6 text-pink-500 mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="">aruntarar32@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-5 shadow-md px-4 py-10 border border-pink-300 rounded-lg">
            <Phone className="w-6 h-6 text-pink-500 mt-1" />
            <div>
              <h4 className="font-semibold ">Phone</h4>
              <p className="">+91 8383013873</p>
            </div>
          </div>
          <div className="flex items-start space-x-5 shadow-md px-4 py-10 border border-pink-300 rounded-lg">
            <MapPin className="w-6 h-6 text-pink-500 mt-1" />
            <div>
              <h4 className="font-semibold ">Address</h4>
              <p className="">Dwarka Mor, New Delhi, Delhi - 59, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow-md space-y-4 border border-pink-300">
          <div>
            <label className="block ">Full Name</label>
            <input type="text" className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block ">Email</label>
            <input type="email" className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block ">Mobile</label>
            <input type="tel" className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Enter your mobile number" />
          </div>
          <div>
            <label className="block ">Message</label>
            <textarea rows="4" className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Write your message here..."></textarea>
          </div>
          <button type="submit" className="w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
    
    </div>
    </>


  );
}

export default Contact;
