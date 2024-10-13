"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Confetti from 'react-confetti'

export default function UserForm() {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [showRedirectMessage, setShowRedirectMessage] = useState(false) 
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!isMounted) return

    setShowConfetti(true)

    setShowRedirectMessage(true)

    setTimeout(() => {
      
      setShowConfetti(false)
      
      router.push('/usenetwork')
    }, 3000)
  }

  return (
    <div className="items-center justify-center ">
      {showConfetti && <Confetti />}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          y: { type: "spring", stiffness: 100 },
        }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-96"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl font-bold mb-6 text-center text-white"
        >
          Welcome
        </motion.h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              placeholder='Name'
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              required
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <label htmlFor="location" className="block text-sm font-medium text-white">
              Location
            </label>
            <input
              placeholder='Location'
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Continue
          </motion.button>
        </form>

        {showRedirectMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center text-white mt-4"
          >
            Taking you to the main page...
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
