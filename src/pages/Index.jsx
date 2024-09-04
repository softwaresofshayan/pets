import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-transparent bg-clip-text">
          Revolutionize Your Business with YourSaaS
        </h1>
        <p className="text-xl mb-8 text-gray-400">
          Empower your team with cutting-edge AI technology and boost productivity.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => navigate('/products')}
            className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-gray-900 hover:from-gray-200 hover:to-gray-400 text-lg px-8 py-4 rounded-full"
          >
            Explore Our Solutions <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;