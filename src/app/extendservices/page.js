'use client'

import Navbar from '@/components/Navbar'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function Component() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    photo: null,
    location: '',
    serviceType: '',
    ratePerHour: '',
    code: '',
    commission: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFormData(prevData => ({
      ...prevData,
      photo: file
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    
  }

  const handleExtend = () => {
    router.push('/services-joined-success')
  }

  return (
    <div className='bg-gray-900'>
        <Navbar />
    <div className="bg-gray-900 min-h-screen mt-16 ml-20 p-4">
      <form onSubmit={handleSubmit} className="w-full -mt-10 max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="photo" className="block text-sm font-medium text-center text-gray-300 mb-2">
            Upload Photo
          </label>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="photo" className="flex flex-col items-center justify-center w-1/2 h-40 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                
              </div>
              <input id="photo" type="file" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
              Location for Charger
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter location"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
              Service Type
            </label>
            <input
              type="text"
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service type"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="ratePerHour" className="block text-sm font-medium text-gray-300 mb-2">
              RATE PER HR
            </label>
            <input
              type="number"
              id="ratePerHour"
              name="ratePerHour"
              value={formData.ratePerHour}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter rate per hour"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="code" className="block text-sm font-medium text-gray-300 mb-2">
              Code
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter code"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="commission" className="block text-sm font-medium text-gray-300 mb-2">
              Your Commission
            </label>
            <input
              type="number"
              id="commission"
              name="commission"
              value={formData.commission}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your commission"
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={handleExtend}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
          Join Network
        </button>
      </form>
    </div>
    </div>
  )
}