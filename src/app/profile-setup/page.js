"use client"
import React, { useState } from 'react';
import ProfileHealthForm from "@/components/ProfileSetupForm"
import { Navbar } from '@/components/Navbar';


export default function HealthForm(){
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] p-4">
        <Navbar />
        <div className='flex flex-row w-full'>
            <div className='w-1/2'>
                <ProfileHealthForm />
            </div>
            <div className='w-1/2 bg-[#1c1c1c] mt-5 rounded-full'>
           
            </div>
      </div>
    </div>
  );
};

