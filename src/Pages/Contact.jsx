import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-3">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have a question, need support, or want to work with us?
          We’d love to hear from you.
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <div className="space-y-6">

          <div>
            <h2 className="text-xl font-medium mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our support team is available Monday to Saturday,
              10:00 AM – 7:00 PM.
            </p>
          </div>

          <div className="space-y-4 text-sm">

            <div>
              <p className="font-medium">📍 Address</p>
              <p className="text-gray-600">
                123 Fashion Street, New Delhi, India
              </p>
            </div>

            <div>
              <p className="font-medium">📧 Email</p>
              <p className="text-gray-600">
                support@yourstore.com
              </p>
            </div>

            <div>
              <p className="font-medium">📞 Phone</p>
              <p className="text-gray-600">
                +91 98765 43210
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="border p-6 sm:p-8 rounded-md">

          <h2 className="text-xl font-medium mb-6">
            Send us a Message
          </h2>

          <form className="space-y-5">

            <div>
              <label className="text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 border px-4 py-2 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 border px-4 py-2 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full mt-1 border px-4 py-2 outline-none resize-none focus:border-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;

