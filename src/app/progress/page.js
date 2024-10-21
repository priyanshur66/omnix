"use client"
import React, { useEffect, useState } from 'react'
import { Navbar } from "@/components/Navbar";
import ProgressTab from "@/components/ProgressTab"
import ClubCard from "@/components/ClubJoinCard"
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import useReadFromOmniXContract from "@/hooks/useReadFromOmniXContract";
export default function Progress() {
    const router = useRouter();
    const [newProfile, setNewProfile] = useState(false);
    const [minCaloriesBurnt, setMinCaloriesBurnt] = useState(0);
    const [minSleepHours, setMinSleepHours] = useState(0);
    const [minSteps, setMinSteps] = useState(0);
    const [minRunningDistance, setMinRunningDistance] = useState(0);
    const [minWalkingDistance, setMinWalkingDistance] = useState(0);
    const [allClubs, setAllClubs] = useState([]);
    const { address } = useAccount();
    const { resData: data, resError, resLoading } = useReadFromOmniXContract({
        funcName: "getUserHealthGoals",
        paraArr: [address],
    });
    console.log("health goad data", data);
    const { resData: allClubsData } = useReadFromOmniXContract({
        funcName: "getAllClubs",
        paraArr: [],
    });
    console.log("resData", allClubsData);

    useEffect(() => {
        if (!data) {
            console.log("No health data found");
            setNewProfile(true);
            return;
        }
    
        // Parse and set health data if available
        const minCaloriesBurnt = Number(String(data?.minCaloriesBurnt)) || 0;
        const minSleepHours = Number(String(data?.minSleepHours)) || 0;
        const minSteps = Number(String(data?.minSteps)) || 0;
        const minRunningDistance = Number(String(data?.minRunningDistance)) || 0;
        const minWalkingDistance = Number(String(data?.minWalkingDistance)) || 0;
    
        setMinCaloriesBurnt(minCaloriesBurnt);
        setMinSleepHours(minSleepHours);
        setMinSteps(minSteps);
        setMinRunningDistance(minRunningDistance);
        setMinWalkingDistance(minWalkingDistance);
    
        // Check if a new profile needs to be created based on data
        if (
            minCaloriesBurnt === 0 &&
            minSleepHours === 0 &&
            minSteps === 0 &&
            minRunningDistance === 0 &&
            minWalkingDistance === 0
        ) {
            console.log("No goals data found, new profile needed.");
            setNewProfile(true);
        } else {
            setNewProfile(false);
        }
    
        // Set clubs data
        setAllClubs(allClubsData || []);
    }, [data, allClubsData]);
    



    return (
        <div className="min-h-screen bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-1/2">
                        {!newProfile ? <ProgressTab steps={minSteps} runs={minRunningDistance} sleep={minSleepHours} calories={minCaloriesBurnt} walk={minWalkingDistance} /> : <div>
                            join some clubs</div>}
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-10 mb-6">Join club</h1> <button onClick={() => {
                            router.push("/club-creation")
                        }}>create new club</button>
                        {allClubsData?.map((club, index) => (
                            <ClubCard key={index} club={club} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}