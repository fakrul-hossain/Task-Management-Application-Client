import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-gray-900  dark:text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white">Task Manager</h2>
          <p className="mt-2 text-sm text-black dark:text-gray-400">
            A simple and efficient task management application to boost productivity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white dark:text-secondary">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-secondary dark:hover:text-tertiary">About</a></li>
            <li><a href="/features" className="hover:text-secondary dark:hover:text-tertiary">Features</a></li>
            <li><a href="/pricing" className="hover:text-secondary dark:hover:text-tertiary">Pricing</a></li>
            <li><a href="/contact" className="hover:text-secondary dark:hover:text-tertiary">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white dark:text-secondary">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-xl hover:text-secondary dark:hover:text-tertiary"><FaFacebookF /></a>
            <a href="#" className="text-xl hover:text-secondary dark:hover:text-tertiary"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-secondary dark:hover:text-tertiary"><FaLinkedinIn /></a>
            <a href="#" className="text-xl hover:text-secondary dark:hover:text-tertiary"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm border-t border-secondary dark:border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Task Manager. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
