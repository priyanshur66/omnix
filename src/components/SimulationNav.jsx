"use client"
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
export default function SimulationNavbar(){
    const router = useRouter();
    const handleBack = () => {
        router.back("/progress")
    }
  return (
    <nav className="bg-gray-900 text-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <button className="flex items-center space-x-2 border px-5 py-1 rounded-lg bg-indigo-400 hover:bg-indigo-600" onClick={handleBack}>
          <FiArrowLeft className="text-4xl border-2 rounded-full hover:bg-indigo-600" />
          <span className="text-2xl font-semibold">Back to progress</span>
        </button>
      </div>
    </nav>
  );
};


