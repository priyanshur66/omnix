'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams, useRouter } from 'next/navigation'

export default function DiscountSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [showPayButton, setShowPayButton] = useState(false)
  const discountedPrice = searchParams.get('price') || '40'

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPayButton(true)
    }, 3000) 

    return () => clearTimeout(timer)
  }, [])

  const handlePayment = () => {
    router.push('/paymentsuccess')
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl px-4"> 
        <motion.h1 
          className="text-5xl font-bold text-green-400 text-center mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          UPDATED PRICE: ${discountedPrice}
        </motion.h1>
        
        <motion.div 
          className="bg-gray-800 rounded-2xl p-8 shadow-lg relative overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-green-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.3 }}
          />
          
          <motion.p 
            className="text-2xl text-white text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Hey you got 
            <motion.span 
              className="text-green-400 font-bold mx-2"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              ${discountedPrice}
            </motion.span> 
            discount,
          </motion.p>
          
          <motion.p 
            className="text-2xl text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            hurraay now lets pay the amount below
          </motion.p>
          
          {showPayButton && (
            <motion.button
              className="w-full py-4 bg-green-500 text-white text-2xl rounded-xl hover:bg-green-600 transition-colors relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={handlePayment}
            >
              <motion.div
                className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              pay
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  )
}