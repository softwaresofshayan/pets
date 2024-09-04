import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const PetMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: [],
    breed: [],
    age: [],
  });

  const petTypes = ["Dog", "Cat", "Bird", "Rabbit", "Fish"];
  const breeds = ["Labrador", "Persian", "Parakeet", "Lop", "Goldfish"];
  const ages = ["Puppy/Kitten", "Young", "Adult", "Senior"];

  const pets = [
    {
      name: "Buddy",
      type: "Dog",
      breed: "Labrador",
      age: "Young",
      image: "https://placedog.net/300/300",
    },
    {
      name: "Whiskers",
      type: "Cat",
      breed: "Persian",
      age: "Adult",
      image:
        "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      name: "Tweety",
      type: "Bird",
      breed: "Parakeet",
      age: "Young",
      image:
        "https://images.unsplash.com/photo-1470662061953-318cd8c6c152?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyYWtlZXR8ZW58MHwwfDB8fHww",
    },
    {
      name: "Hoppy",
      type: "Rabbit",
      breed: "Lop",
      age: "Adult",
      image:
        "https://plus.unsplash.com/premium_photo-1661832480567-68a86cb46f34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFiYml0fGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      name: "Goldie",
      type: "Fish",
      breed: "Goldfish",
      age: "Young",
      image:
        "https://images.unsplash.com/photo-1509016068623-286b408eb841?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZGZpc2h8ZW58MHwwfDB8fHww",
    },
    {
      name: "Max",
      type: "Dog",
      breed: "Labrador",
      age: "Senior",
      image: "https://placedog.net/301/300",
    },
  ];

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value],
    }));
  };

  const filteredPets = pets.filter((pet) => {
    return (
      (searchTerm === "" ||
        pet.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filters.type.length === 0 || filters.type.includes(pet.type)) &&
      (filters.breed.length === 0 || filters.breed.includes(pet.breed)) &&
      (filters.age.length === 0 || filters.age.includes(pet.age))
    );
  });

  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-20 mt-20 text-center text-purple-600">
          Pet Marketplace
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="w-full md:w-1/4">
            <div className="comic-panel">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Filters</h2>
              <Input
                type="text"
                placeholder="Search pets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4"
              />
              <div className="mb-4">
                <h3 className="font-bold mb-2">Pet Type</h3>
                {petTypes.map((type) => (
                  <div key={type} className="flex items-center mb-2">
                    <Checkbox
                      id={`type-${type}`}
                      checked={filters.type.includes(type)}
                      onCheckedChange={() => handleFilterChange("type", type)}
                    />
                    <label htmlFor={`type-${type}`} className="ml-2">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-2">Breed</h3>
                {breeds.map((breed) => (
                  <div key={breed} className="flex items-center mb-2">
                    <Checkbox
                      id={`breed-${breed}`}
                      checked={filters.breed.includes(breed)}
                      onCheckedChange={() => handleFilterChange("breed", breed)}
                    />
                    <label htmlFor={`breed-${breed}`} className="ml-2">
                      {breed}
                    </label>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-bold mb-2">Age</h3>
                {ages.map((age) => (
                  <div key={age} className="flex items-center mb-2">
                    <Checkbox
                      id={`age-${age}`}
                      checked={filters.age.includes(age)}
                      onCheckedChange={() => handleFilterChange("age", age)}
                    />
                    <label htmlFor={`age-${age}`} className="ml-2">
                      {age}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pet grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPets.map((pet, index) => (
                <motion.div
                  key={index}
                  className="comic-panel"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{pet.name}</h3>
                    <p>
                      {pet.breed} - {pet.age}
                    </p>
                    <Button className="comic-button mt-4 w-full">
                      Adopt Me!
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PetMarketplace;
