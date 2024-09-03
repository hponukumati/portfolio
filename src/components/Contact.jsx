import React from "react";
import contacts from "../data/contacts"; // Adjust the path as necessary

const Contact = () => {
  return (

    <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row pb-24">
      <div className="w-full md:pr-8">
        <form>
          <div className="my-6">
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              placeholder="Enter your message"
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="underline">
              <a href="mailto:sriharshaponukumati@gmail.com">
                Send me email directly
              </a>
            </div>
            <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
              <a href="mailto:sriharshaponukumati@gmail.com">Submit</a>
            </button>
          </div>
        </form>
      </div>

      {/* Contact section with links */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h2 className="text-5xl font-bold text-center">Contact Me</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-110 cursor-pointer md:w-48 w-40"
            >
              <img alt={contact.name} src={contact.icon} className="w-12" />
              <h4 className="text-md ml-4">{contact.name}</h4>
            </a>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Contact;
