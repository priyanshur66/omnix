'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useReadFromBasePayContract from "@/hooks/useReadFromBasePayContract";
import { useAccount } from "wagmi";
import QRCode from 'qrcode.react'

export default function Component() {
  const { address } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const totalCommission = 1234.56 // Replace with actual commission data
  const { resData: serviceProviderData } = useReadFromBasePayContract({ funcName: "addressToServiceProvider", paraArr: [address] });
  console.log("serviceProviderData",serviceProviderData)

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-6 flex justify-between items-center">
        <div className="text-green-400 text-xl">
          total commission earned <span className="font-bold">${String(serviceProviderData?.[5])}</span>
        </div>
        <button
          onClick={toggleModal}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          view qr
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={toggleModal}
          >
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="bg-gray-800 p-6 rounded-lg w-full max-w-2xl max-h-[50vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Your QR Code</h2>
              <div className="flex justify-center">
                <QRCode 
                  value={`https://example.com/user/${totalCommission}`} 
                  size={256}
                  bgColor="#1F2937"
                  fgColor="#10B981"
                  level="L"
                  includeMargin={true}
                />
              </div>
              <button
                onClick={toggleModal}
                className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}