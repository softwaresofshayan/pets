import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-400 text-white p-8 comic-border mt-8"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">PawsomePets</h3>
          <p>Bringing joy to pets and their humans since 2024!</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-yellow-300">
                News
              </Link>
            </li>
            <li>
              <Link to="/marketplace" className="hover:text-yellow-300">
                Pet Marketplace
              </Link>
            </li>
            <li>
              <Link to="/pet-care" className="hover:text-yellow-300">
                Pet Care
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-yellow-300">
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Pet Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-300">
                Adoption Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Pet Care Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Training Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Pet Health Articles
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl hover:text-yellow-300">
              <Facebook />
            </a>
            <a href="#" className="text-2xl hover:text-yellow-300">
              <Twitter />
            </a>
            <a href="#" className="text-2xl hover:text-yellow-300">
              <Instagram />
            </a>
          </div>
          <p className="mt-4">Subscribe to our newsletter:</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="comic-input mt-2 w-full text-black"
          />
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 PawsomePets. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
