import React from 'react';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import { navItems } from "../nav-items";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-400 p-4 comic-border mb-4"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-white mb-4 md:mb-0"
        >
          PawsomePets
        </motion.div>
        <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4">
          {navItems.map((item) => (
            <motion.li key={item.to} whileHover={{ scale: 1.1 }}>
              <NavLink 
                to={item.to} 
                className={({ isActive }) =>
                  isActive ? "text-yellow-300 font-bold" : "text-white hover:text-yellow-300"
                }
              >
                {item.title}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;