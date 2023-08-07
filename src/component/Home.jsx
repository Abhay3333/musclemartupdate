import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <><div>
          <nav className="bg-blue-900 p-4">
              <div className="container mx-auto flex justify-between items-center">
                  <Link to="/" className="text-white font-bold text-lg">
                      MuscleMart
                  </Link>
                  <div className="md:flex space-x-4">
                      <Link to="/login" className="text-white hover:underline">
                          Login
                      </Link>
                      <Link to="/signup" className="text-white hover:underline">
                          SignUp
                      </Link>
                      <Link to="/products" className="text-white hover:underline">
                          Products
                      </Link>
                      <Link to="/about" className="text-white hover:underline">
                          About
                      </Link>
                      <Link to="/contact" className="text-white hover:underline">
                          Contact
                      </Link>
                      <Link to="/cart" className="text-white hover:underline">
                          Cart
                      </Link>
                  </div>
              </div>
          </nav>
      </div>
      <div className="bg-blue-500 py-12 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-semibold mb-4">Featured Product</h2>
            <p className="text-lg mb-4">
              Discover our latest and greatest product that will change your fitness journey!
            </p>
            <button className="bg-white text-blue-500 hover:bg-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
              Shop Now
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src=""
              alt="Featured Product"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
                <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                    <img src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png" alt="Envelope with a newsletter" role="img" className="h-full xl:w-full lg:w-1/2 w-full " />
                </div>
                <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
                    <p className="text-base leading-normal text-gray-600 text-center xl:text-left">Whether article spirits new her covered hastily sitting her. Money witty books nor son add.</p>
                    <div className="flex items-stretch mt-12">
                        <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                        <button className="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                    </div>
                </div>
            </div>
    </>
  

  );
};

export default Home;
