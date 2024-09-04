import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const News = () => {
  const newsItems = [
    {
      title: "New Adoption Center Opening!",
      content:
        "We're excited to announce the opening of our new adoption center in downtown! This state-of-the-art facility will allow us to help even more pets find their forever homes.",
      image:
        "https://plus.unsplash.com/premium_photo-1724478437668-d8ebb31e8d93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1hbiUyMHdpdGglMjBjYXRzfGVufDB8fDB8fHww",
    },
    {
      title: "Pet Health Workshop This Weekend",
      content:
        "Join us for a free pet health and nutrition workshop led by expert veterinarians. Learn how to keep your furry friends happy and healthy!",
      image: "https://placedog.net/401/250",
    },
    {
      title: "Success Story: Max Finds His Forever Home",
      content:
        "After months in our care, lovable Max has finally found his perfect family! Read about his heartwarming journey to happiness.",
      image:
        "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww",
    },
    {
      title: "Volunteer Appreciation Day",
      content:
        "We're hosting a special event to thank our amazing volunteers. Your dedication makes a world of difference to our furry friends!",
      image: "https://placedog.net/403/250",
    },
    {
      title: "New Partnership with Local Pet Food Company",
      content:
        "We're thrilled to announce our new partnership with Healthy Paws Pet Food. This collaboration will ensure our pets receive top-quality nutrition.",
      image:
        "https://plus.unsplash.com/premium_photo-1664300965124-5919ac08340f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGV0JTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Upcoming Fundraiser: Paws for a Cause",
      content:
        "Mark your calendars for our annual Paws for a Cause walkathon. Help us raise funds for medical care for rescue animals!",
      image: "https://placedog.net/405/250",
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
          PawsomePets News
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              className="comic-panel"
              whileHover={{ scale: 1.03 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-600">
                {item.title}
              </h2>
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg comic-border mb-4"
                whileHover={{ scale: 1.05 }}
              />
              <p className="text-lg mb-4">{item.content}</p>
              <Button className="comic-button">Read More</Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default News;
