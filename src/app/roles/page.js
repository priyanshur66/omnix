'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'


export default function Roles() {
  const [hoveredBox, setHoveredBox] = useState(null)
  const router = useRouter()

  const boxes = [
    { 
      id: 1, 
      title: 'Pay using BasedPay', 
      content: 'Leverage our advanced network for seamless transactions',
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/usenetwork'
    },
    { 
      id: 2, 
      title: 'Onboard users to my web3 App', 
      content: 'Promote your Base application to a wider audience',
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 7L15 12L9 17" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/advertisementsetup'
    },
    { 
      id: 3, 
      title: 'Extend my service network', 
      content: 'Contribute to and expand our growing ecosystem',
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/extendservices'
    }
  ]

  const boxVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 0px 8px rgb(59, 130, 246)',
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
  }

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom) => ({
      pathLength: 1,
      opacity: 1,
      transition: { 
        pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
        delay: custom * 0.5
      },
    }),
  }

  return (
    <div className='bg-gray-900'>
      <Navbar />
      <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl -mt-36">
          <h2 className="text-7xl font-bold text-center text-white mb-12">I want to...</h2>
          <div className="relative">
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M100 100 H300"
                stroke="#3b82f6"
                strokeWidth="2"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                custom={0}
              />
              <motion.path
                d="M200 100 V200"
                stroke="#3b82f6"
                strokeWidth="2"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                custom={1}
              />
            </svg>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {boxes.map((box) => (
                <motion.div
                  key={box.id}
                  className="bg-gray-800 rounded-lg p-6 cursor-pointer relative z-10 flex flex-col items-center text-center"
                  variants={boxVariants}
                  whileHover="hover"
                  onClick={() => router.push(box.link)}
                  onHoverStart={() => setHoveredBox(box.id)}
                  onHoverEnd={() => setHoveredBox(null)}
                >
                  {box.icon}
                  <h3 className="text-xl font-semibold text-blue-500 mb-2">{box.title}</h3>
                  <p className="text-gray-400">{box.content}</p>
                  {hoveredBox === box.id && (
                    <motion.div
                      className="absolute inset-0 bg-purple-500 rounded-lg opacity-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}