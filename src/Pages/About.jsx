import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8 px-4">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold  text-[var(--green)]">About</h1>
        <p className="text-lg  mt-4">Streamlining University Problem Solving</p>
      </div>

      {/* Overview Section */}
      <div className="max-w-4xl text-center mb-12">
        <p className="text-xl ">
          UniSolve is an innovative platform designed to bridge the gap between university students and campus departments.
          Whether you face technical issues, network problems, or need assistance finding the right office, our system automatically
          categorizes and routes your concerns to the relevant department, ensuring fast and efficient resolution.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="grid md:grid-cols-2 gap-8 px-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold  text-[var(--green)]">Problem Categorization</h2>
          <p className="text-black mt-4">
            Students can report their issues by category (IT, academics, infrastructure, etc.), which are automatically routed to
            the relevant department.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold  text-[var(--green)]">Cabin Finder</h2>
          <p className="text-black mt-4">
            Easily find the exact cabin or office location within the campus, helping students quickly navigate the university
            for assistance.
          </p>
        </div>
      </div>

      {/* Why UniSolve Section */}
      <div className="text-center my-12">
        <h2 className="text-2xl font-semibold  text-[var(--green)]">Why Choose UniSolve?</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          UniSolve is more than just a problem reporting tool. It's an intelligent assistant for university students, streamlining the
          process of getting help when you need it most. Whether it's finding a cabin, getting technical support, or addressing academic
          concerns, UniSolve helps you get the answers you need quickly and efficiently, so you can focus on what really matters – your education.
        </p>
      </div>

      {/* Call to Action Section */}
      <Footer/>
    </div>
  );
};

export default About;
