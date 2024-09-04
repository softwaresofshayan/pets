import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Help = () => {
  const faqs = [
    {
      question: "How do I adopt a pet?",
      answer:
        "Visit our Pet Marketplace, choose a pet, and follow the adoption process outlined on the pet's profile page.",
    },
    {
      question: "What vaccinations do pets need?",
      answer:
        "Common vaccinations include rabies, distemper, and parvovirus. Consult with a veterinarian for a complete vaccination schedule.",
    },
    {
      question: "How often should I groom my pet?",
      answer:
        "Grooming frequency depends on the pet's breed and coat type. Generally, dogs need grooming every 4-8 weeks, while cats groom themselves but may need occasional brushing.",
    },
    {
      question: "What should I feed my new pet?",
      answer:
        "Choose a high-quality pet food appropriate for your pet's age, size, and health needs. Consult with a veterinarian for specific dietary recommendations.",
    },
    {
      question: "How do I train my new pet?",
      answer:
        "Start with basic commands, use positive reinforcement, and be consistent. Consider enrolling in a professional training class for more guidance.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-20 mt-10 text-center text-purple-600">
          Help Center
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="comic-panel">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="comic-panel">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Need More Help?
            </h2>
            <p className="text-lg mb-4">
              If you can't find the answer you're looking for, our friendly
              support team is here to help!
            </p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>Email us at: support@pawsomepets.com</li>
              <li>Call us at: (555) 123-4567</li>
              <li>Visit our Contact page for more options</li>
            </ul>
            <motion.img
              src="https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Support team"
              className="w-full h-auto rounded-lg comic-border"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>

        <div className="comic-panel">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Pet Care Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-slate-200 p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">Pet Care Guides</h3>
              <p>
                Access our comprehensive guides on pet care, nutrition, and
                health.
              </p>
            </motion.div>
            <motion.div
              className="bg-slate-200 p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
              <p>
                Watch our helpful video tutorials on pet training and care
                techniques.
              </p>
            </motion.div>
            <motion.div
              className="bg-slate-200 p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">Community Forum</h3>
              <p>
                Join our community forum to connect with other pet owners and
                share experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Help;
