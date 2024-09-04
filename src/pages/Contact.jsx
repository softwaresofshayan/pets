import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-600">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="comic-panel">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Get in Touch
            </h2>
            <form>
              <Input
                type="text"
                placeholder="Your Name"
                className="comic-input mb-4"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="comic-input mb-4"
              />
              <Textarea
                placeholder="Your Message"
                className="comic-input mb-4"
                rows={5}
              />
              <Button type="submit" className="comic-button w-full">
                Send Message
              </Button>
            </form>
          </div>
          <div className="comic-panel">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Visit Us</h2>
            <p className="text-lg mb-4">Come say hello to our furry friends!</p>
            <p className="font-bold mb-2">PawsomePets Adoption Center</p>
            <p className="mb-4">123 Pet Street, Animalville, CA 12345</p>
            <p className="font-bold mb-2">Opening Hours:</p>
            <p className="mb-4">
              Monday - Saturday: 10am - 6pm
              <br />
              Sunday: 12pm - 4pm
            </p>
            <p className="font-bold mb-2">Phone:</p>
            <p className="mb-4">(555) 123-4567</p>
            <p className="font-bold mb-2">Email:</p>
            <p className="mb-4">woof@pawsomepets.com</p>
            <motion.img
              src="https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfDB8MHx8fDA%3D"
              alt="PawsomePets location"
              className="w-full h-auto rounded-lg comic-border"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
