import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-gray-600 text-white flex justify-center items-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl mb-6">Get In Touch</h1>
        <p className="text-xl">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
        <a href="mailto:youremail@example.com" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Email Me</a>
      </div>
    </section>
  );
};

export default Contact;
