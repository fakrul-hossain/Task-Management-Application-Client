import React from "react";
import { Link } from "react-router-dom";
import { FaTasks, FaCheckCircle, FaUsers } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold">Welcome to Task Management App</h1>
        <p className="mt-4 text-lg">Organize your tasks efficiently with our simple and powerful tool.</p>
        <Link to="/login" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-600 transition">
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-200 dark:bg-gray-700 rounded-lg text-center">
            <FaTasks className="text-4xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold">Task Organization</h3>
            <p className="mt-2">Easily categorize tasks into To-Do, In Progress, and Done.</p>
          </div>
          <div className="p-6 bg-gray-200 dark:bg-gray-700 rounded-lg text-center">
            <FaCheckCircle className="text-4xl mx-auto mb-4 text-green-500" />
            <h3 className="text-xl font-semibold">Real-Time Updates</h3>
            <p className="mt-2">Stay up-to-date with live task status using MongoDB Change Streams.</p>
          </div>
          <div className="p-6 bg-gray-200 dark:bg-gray-700 rounded-lg text-center">
            <FaUsers className="text-4xl mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold">Team Collaboration</h3>
            <p className="mt-2">Invite and work together with your team seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 px-6">
        <h2 className="text-2xl font-bold">Ready to Boost Your Productivity?</h2>
        <p className="mt-2">Sign up now and take control of your tasks!</p>
        <Link to="/login" className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-green-600 transition">
          Sign In / Sign Up
        </Link>
      </section>
    </div>
  );
};

export default Home;
