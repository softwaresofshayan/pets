import React from 'react';
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    { question: "What is YourSaaS?", answer: "YourSaaS is an AI-powered software solution designed to enhance business productivity and streamline operations." },
    { question: "How can YourSaaS benefit my business?", answer: "YourSaaS can automate repetitive tasks, provide data-driven insights, and improve overall efficiency, leading to cost savings and increased productivity." },
    { question: "Is my data safe with YourSaaS?", answer: "Yes, we prioritize data security and privacy. All your information is encrypted and stored securely, and we comply with industry-standard security protocols." },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-transparent bg-clip-text">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default FAQ;