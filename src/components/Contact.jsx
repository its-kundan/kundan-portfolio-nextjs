'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your own EmailJS service ID, template ID, and user ID
    // const serviceID = 'YOUR_SERVICE_ID';
    // const templateID = 'YOUR_TEMPLATE_ID';
    // const userID = 'YOUR_USER_ID';
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;


    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatusMessage('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatusMessage('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send
          </button>
        </div>
      </form>

      {/* Status Message */}
      {statusMessage && (
        <p className="mt-4 text-center text-green-500">{statusMessage}</p>
      )}
    </div>
  );
};

export default ContactForm;
