import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Whiskers",
      role: "Chief Veterinarian",
      image:
        "https://images.unsplash.com/photo-1514328525431-eac296c01d82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHB1cHB5fGVufDB8fDB8fHww",
    },
    {
      name: "Doggo",
      role: "Founder and CEO",
      image: "https://placedog.net/200/200",
    },
    {
      name: "Dr. Puppy Jones",
      role: "Co Founder and CTO",
      image:
        "https://plus.unsplash.com/premium_photo-1676479611661-1ca58aa109b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHB1cHB5fGVufDB8fDB8fHww",
    },
    {
      name: "Fluffy McFluffster",
      role: "Adoption Specialist",
      image: "https://placedog.net/201/200",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-20 mt-20 text-center text-purple-600">
          About PawsomePets
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="comic-panel">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Story</h2>
            <p className="text-lg mb-4">
              PawsomePets started with a simple idea: to create a world where
              every pet has a loving home. Founded by a group of passionate
              animal lovers in 2024, we've grown into a community dedicated to
              connecting pets with their perfect families.
            </p>
            <motion.img
              src="https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Happy pets and owners"
              className="w-full h-auto rounded-lg comic-border"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="comic-panel">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Our Mission
            </h2>
            <p className="text-lg mb-4">
              At PawsomePets, our mission is to create joyful connections
              between pets and people. We believe that every animal deserves a
              chance at happiness, and every person's life can be enriched by
              the love of a pet.
            </p>
            <motion.img
              src="https://images.unsplash.com/photo-1529906920574-628dc1e49f5a?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="PawsomePets mission"
              className="w-full h-auto rounded-lg comic-border"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>

        <div className="comic-panel mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto mb-4 comic-border"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="comic-panel">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Our Approach
            </h2>
            <p className="text-lg mb-4">
              We take a holistic approach to pet adoption and care. Our team of
              experts ensures that each pet is healthy, well-socialized, and
              ready for their forever home. We also provide ongoing support and
              resources to help pet parents give their furry friends the best
              life possible.
            </p>
            <motion.img
              src="https://plus.unsplash.com/premium_photo-1724478438899-65aa459d178a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="PawsomePets approach"
              className="w-full h-auto rounded-lg comic-border"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="comic-panel">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Community Involvement
            </h2>
            <p className="text-lg mb-4">
              PawsomePets is more than just an adoption center - we're an
              integral part of the community. We organize regular events,
              workshops, and fundraisers to promote animal welfare and educate
              the public on responsible pet ownership. Join us in making a
              difference in the lives of pets and people alike!
            </p>
            <motion.img
              src="https://placedog.net/503/300"
              alt="Community event"
              className="w-full h-auto rounded-lg comic-border"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
