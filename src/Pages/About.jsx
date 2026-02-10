import React from "react";
import brand from '../assets/frontend_assets/brand.png'

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

    
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          About Our Brand
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are more than just an online store — we are a fashion destination
          built to deliver quality, style, and confidence to your doorstep.
        </p>
      </div>

  
      <div className="grid sm:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our journey started with a simple idea — to make trendy,
            high-quality fashion accessible to everyone. We believe that
            clothing is not just about style, but about confidence and comfort.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From everyday essentials to statement pieces, each product is
            carefully curated and crafted to meet modern fashion needs.
          </p>
        </div>

        <div className="border h-[260px] flex items-center justify-center text-gray-400">
        <img src={brand} alt="" />
        </div>
      </div>

   
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">

          <div className="border p-6 rounded text-center">
            <h3 className="font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600 text-sm">
              Every product goes through strict quality checks to ensure the
              best experience for our customers.
            </p>
          </div>

          <div className="border p-6 rounded text-center">
            <h3 className="font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600 text-sm">
              We believe great fashion should be affordable without compromising
              on quality.
            </p>
          </div>

          <div className="border p-6 rounded text-center">
            <h3 className="font-semibold mb-2">Fast & Secure Delivery</h3>
            <p className="text-gray-600 text-sm">
              Reliable shipping partners ensure your orders reach you on time,
              safely and securely.
            </p>
          </div>

        </div>
      </div>

     
      <div className="grid sm:grid-cols-2 gap-10 mb-16">

        <div className="border p-6 rounded">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To provide stylish, comfortable, and affordable fashion that
            empowers people to express themselves confidently every day.
          </p>
        </div>

        <div className="border p-6 rounded">
          <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To become a trusted and loved fashion brand by continuously
            innovating and putting customers at the heart of everything we do.
          </p>
        </div>

      </div>

      <div className="bg-gray-50 p-8 rounded text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Trusted by Thousands of Customers
        </h2>
        <p className="text-gray-600 mb-6">
          Join our growing community of happy customers who trust us for
          quality, value, and style.
        </p>

        <div className="flex justify-center gap-10 text-center">
          <div>
            <h3 className="text-2xl font-bold">10K+</h3>
            <p className="text-gray-500 text-sm">Orders Delivered</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">4.5★</h3>
            <p className="text-gray-500 text-sm">Average Rating</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">24/7</h3>
            <p className="text-gray-500 text-sm">Customer Support</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;

