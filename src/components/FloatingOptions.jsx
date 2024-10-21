import React, { useState } from 'react';
import { motion } from 'framer-motion';

const options = [
  "Calories Burnt", 
  "Muscle Built", 
  "Steps Taken", 
  "Sleep Quality", 
  "Water Intake", 
  "Stress Level", 
  "Weight Loss"
];

const positions = [
  { top: '20%', left: '10%' },
  { top: '10%', left: '50%' },
  { top: '40%', left: '30%' },
  { top: '40%', left: '60%' },
  { top: '70%', left: '15%' },
  { top: '70%', left: '40%' },
  { top: '65%', left: '70%' },
];

const FloatingDivs = () => {
  const [selectedDivs, setSelectedDivs] = useState([]);

  const toggleSelection = (index) => {
    setSelectedDivs((prev) => 
      prev.includes(index) ? prev.filter(item => item !== index) : [...prev, index]
    );
  };

  const createClub = () => {
    console.log('Creating club with selected divs:', selectedDivs);
  };

  return (
    <div className="relative h-[400px]">
      {options.map((text, index) => (
        <motion.div
          key={index}
          className={`absolute p-4 rounded-lg font bold shadow-md cursor-pointer ${selectedDivs.includes(index) ? 'bg-indigo-500' : 'bg-indigo-100'}`}
          style={{
            top: positions[index].top,
            left: positions[index].left,
          }}
          initial={{ opacity: 1, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: [0, 5, -5, 0],
            y: [0, -5, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onClick={() => toggleSelection(index)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {text}
        </motion.div>
      ))}

      <div className="text-center mt-16">
    
      </div>
    </div>
  );
};

export default FloatingDivs;
