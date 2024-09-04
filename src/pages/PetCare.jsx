import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PetCare = () => {
  const [activeTab, setActiveTab] = useState("products");

  const products = [
    {
      name: "Deluxe Pet Bed",
      description: "Comfortable bed for your furry friend",
      price: "$49.99",
      image:
        "https://images.unsplash.com/photo-1541188495357-ad2dc89487f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0JTIwYmVkfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      name: "Interactive Toy",
      description: "Keep your pet entertained for hours",
      price: "$19.99",
      image:
        "https://images.unsplash.com/photo-1477884143921-51d0a574ee09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Grooming Kit",
      description: "Complete set for pet grooming",
      price: "$34.99",
      image:
        "https://plus.unsplash.com/premium_photo-1664300949075-b4241ea33f1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwZ3Jvb21pbmd8ZW58MHwwfDB8fHww",
    },
  ];

  const doctors = [
    {
      name: "Dr. Whiskers",
      specialty: "Feline Specialist",
      experience: "10 years",
      image:
        "https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      name: "Dr. Barker",
      specialty: "Canine Expert",
      experience: "15 years",
      image: "https://placedog.net/300/200",
    },
    {
      name: "Dr. Chirps",
      specialty: "Avian Veterinarian",
      experience: "8 years",
      image:
        "https://plus.unsplash.com/premium_photo-1675714692342-01dfd2e6b6b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlyZHxlbnwwfDB8MHx8fDA%3D",
    },
  ];

  const foods = [
    {
      name: "Premium Dry Food",
      description: "Nutritionally complete for adult dogs",
      price: "$29.99",
      image:
        "https://plus.unsplash.com/premium_photo-1683134382202-aac458a92c19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Gourmet Dog Food",
      description: "Delicious flavors your cat will love",
      price: "$24.99",
      image:
        "https://images.unsplash.com/photo-1669873433859-8e8779f9fc49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0JTIwZm9vZHxlbnwwfDB8MHx8fDA%3D",
    },
    {
      name: "Small Animal Pellets",
      description: "Balanced diet for rabbits and guinea pigs",
      price: "$14.99",
      image:
        "https://plus.unsplash.com/premium_photo-1678554875478-5f0964b06cc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVsbGV0fGVufDB8MHwwfHx8MA%3D%3D",
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
          Pet Care Center
        </h1>

        <Tabs
          defaultValue="products"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 mb-20 ">
            <TabsTrigger value="products" className="text-lg comic-panel-2">
              Pet Products
            </TabsTrigger>
            <TabsTrigger value="doctors" className="text-lg comic-panel-2">
              Pet Doctors
            </TabsTrigger>
            <TabsTrigger value="foods" className="text-lg comic-panel-2">
              Pet Foods
            </TabsTrigger>
          </TabsList>
          <TabsContent value="products">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-36">
              {products.map((product, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }}>
                  <Card className="comic-panel">
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <p className="font-bold text-lg">{product.price}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="doctors">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-36">
              {doctors.map((doctor, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }}>
                  <Card className="comic-panel">
                    <CardHeader>
                      <CardTitle>{doctor.name}</CardTitle>
                      <CardDescription>{doctor.specialty}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <p className="font-bold">
                        Experience: {doctor.experience}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="foods">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-36">
              {foods.map((food, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }}>
                  <Card className="comic-panel">
                    <CardHeader>
                      <CardTitle>{food.name}</CardTitle>
                      <CardDescription>{food.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <p className="font-bold text-lg">{food.price}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default PetCare;
