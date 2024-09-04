import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    { name: "YourSaaS Basic", price: "$99/month", features: ["AI-powered analytics", "Basic automation", "24/7 support"] },
    { name: "YourSaaS Pro", price: "$299/month", features: ["Everything in Basic", "Advanced AI insights", "Custom integrations", "Priority support"] },
    { name: "YourSaaS Enterprise", price: "Custom pricing", features: ["Everything in Pro", "Dedicated account manager", "On-premise deployment", "Custom AI models"] },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-transparent bg-clip-text">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card className="bg-gray-800 border-gray-700 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white">{product.name}</CardTitle>
                  <p className="text-xl font-bold text-gray-300">{product.price}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-gray-900 hover:from-gray-200 hover:to-gray-400">Choose Plan</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Products;