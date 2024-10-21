"use client"
import React from 'react'
import { Navbar } from "@/components/Navbar";
import ClubForm from "@/components/ClubForm"
import FloatingOptions from "@/components/FloatingOptions"
import { useRouter } from 'next/navigation';
export default function Clubcreation(){
    const router = useRouter()

    const handleClubRouter = () => {
        router.push("/progress")
    }

    return(
        <div className="min-h-screen bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]">
            <Navbar />
            <div className=" min-h-screen flex flex-row w-full">
                <div className="w-1/2">
                    <ClubForm />
                </div>
                <div className="mr-10 w-1/2">
                    <FloatingOptions />
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg mx-60"
                            onClick={handleClubRouter}>
                        Create Club
                    </button>
                </div>
            </div>
        </div>
    )
}