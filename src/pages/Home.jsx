import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const testimonials = [
    {
      name: "Sarah L.",
      text: "PawsomePets helped me find my perfect furry companion!",
    },
    {
      name: "Mike R.",
      text: "The team's dedication to animal welfare is truly inspiring.",
    },
    {
      name: "Emily T.",
      text: "I love the community events PawsomePets organizes!",
    },
  ];

  const blogPosts = [
    {
      title: "5 Tips for New Pet Owners",
      image:
        "https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The Benefits of Adopting Senior Pets",
      image: "https://placedog.net/300/200",
    },
    {
      title: "How to Create a Pet-Friendly Garden",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Hero Section */}
        <div className="comic-panel mb-12 py-20 bg-yellow-100">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 text-violet-700 shadow-text">
              Welcome to PawsomePets!
            </h1>
            <p className="text-xl text-gray-700 mb-8 shadow-text">
              Find Your Furry Soulmate Today
            </p>
            <Link to="/marketplace">
              <Button className="comic-button text-xl bg-white text-purple-600 hover:bg-gray-100">
                Start Adopting!
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* What We Do Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="comic-panel">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
              What We Do
            </h2>
            <ul className="text-lg list-disc list-inside mb-4">
              <li>Match pets with loving families</li>
              <li>Provide expert care and advice</li>
              <li>Organize community events</li>
              <li>Educate on responsible pet ownership</li>
            </ul>
            <motion.img
              src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Happy dog"
              className="w-full h-auto rounded-lg mb-4 comic-border"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="comic-panel">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
              How We Are
            </h2>
            <p className="text-lg mb-4">
              We're a passionate team of animal lovers dedicated to creating a
              world where every pet has a happy home. Our approach is fun,
              caring, and committed to the well-being of all animals.
            </p>
            <motion.img
              src="https://images.unsplash.com/photo-1570450466756-c1c0bc431719?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cute kitten"
              className="w-full h-auto rounded-lg mb-4 comic-border"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="comic-panel mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            What Our Pet Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-slate-200 p-4 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <p className="mb-2">"{testimonial.text}"</p>
                <p className="font-bold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trending Blog Posts */}
        <div className="comic-panel mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            Trending Pet Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <Button className="comic-button">Read More</Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pet Shops Nearby */}
        <div className="comic-panel">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            Pet Shops Nearby
          </h2>
          <p className="mb-4">Find pet supplies and services in California:</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d423286.27405770525!2d-118.69192113701154!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spet%20shops!5e0!3m2!1sen!2sus!4v1678322221617!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg comic-border"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
