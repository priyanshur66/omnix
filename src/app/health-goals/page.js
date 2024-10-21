"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation' 
import { Navbar } from '@/components/Navbar'

const healthGoals = [
  "Lose weight", "Gain muscle", "Improve stamina", "Eat healthier",
  "Reduce stress", "Better sleep", "Increase flexibility", "Run a marathon",
  "Lower cholesterol", "Quit smoking", "Improve posture", "Reduce blood pressure",
  "Increase water intake", "Improve mental health", "Build strength", "Enhance balance"
]

export default function HealthGoalsSelection() {
  const router = useRouter() 
  const [selectedGoals, setSelectedGoals] = useState([])
  const [isShaking, setIsShaking] = useState(true)

  const toggleGoal = (goal) => {
    setSelectedGoals(prev => 
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    )
    setIsShaking(false)
  }

  const handleSave = () => {
    console.log('Selected goals:', selectedGoals)
    router.push('/progress') 
  }

  const shakeAnimation = {
    x: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] ">
        <Navbar />
      <h1 className="text-7xl font-extrabold text-center text-white mb-12 mt-10">Health Goals!</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {healthGoals.map((goal, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-lg shadow-md cursor-pointer transition-colors duration-300 hover:bg-indigo-500 hover:text-white ${
                selectedGoals.includes(goal) ? 'bg-indigo-500 text-white' : 'bg-white text-purple-800'
              }`}
              whileHover={{ scale: 1.05 }}
              animate={isShaking ? shakeAnimation : {}}
              onClick={() => toggleGoal(goal)}
            >
              {goal}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <motion.button
          className="px-10 py-3 bg-indigo-600 hover:bg-white hover:text-black text-white rounded-full font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
        >
          Save
        </motion.button>
      </div>
    </div>
  )
}
