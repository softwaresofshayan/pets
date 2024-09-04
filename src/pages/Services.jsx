import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    { title: "AI-Powered Analytics", description: "Gain deep insights from your data using our advanced AI algorithms." },
    { title: "Process Automation", description: "Streamline your workflows with intelligent automation solutions." },
    { title: "Predictive Maintenance", description: "Reduce downtime and costs with our AI-driven predictive maintenance system." },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-transparent bg-clip-text">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card className="bg-gray-800 border-gray-700 h-full">
                <CardHeader>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;