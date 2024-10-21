"use client"
import React from 'react';
import SimulationNavbar from "@/components/SimulationNav";
import { useHealthGoalsStore } from '../../../store'; // Assuming the store is in a file named store.js or store.ts
import { useRouter } from 'next/navigation';
const WatchSimulation = () => {
  const {
    minCaloriesBurnt,
    minSleepHours,
    minSteps,
    minRunningDistance,
    minWalkingDistance,
    setMinCaloriesBurnt,
    setMinSleepHours,
    setMinSteps,
    setMinRunningDistance,
    setMinWalkingDistance
  } = useHealthGoalsStore();

  const [time, setTime] = React.useState('');
  const [date, setDate] = React.useState('');
  const router = useRouter()
  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const dateString = now.toLocaleDateString();
      setTime(timeString);
      setDate(dateString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-300 min-h-screen bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#000_82%)]">
      <SimulationNavbar />
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-10 p-6 max-w-5xl mx-auto space-y-6 md:space-y-0 mt-10 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] rounded-xl">
        
        <div className="bg-gray-100 mr-40 p-6 rounded-md w-full md:w-1/3 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Health Goals Input Form</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Min Sleep Hours</label>
              <input
                type="number"
                value={minSleepHours}
                onChange={(e) => setMinSleepHours(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter min sleep hours"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Min Calories Burnt (Kcal)</label>
              <input
                type="number"
                value={minCaloriesBurnt}
                onChange={(e) => setMinCaloriesBurnt(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter min calories burnt"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Min Steps</label>
              <input
                type="number"
                value={minSteps}
                onChange={(e) => setMinSteps(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter min steps"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Min Running Distance (km)</label>
              <input
                type="number"
                value={minRunningDistance}
                onChange={(e) => setMinRunningDistance(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter min running distance"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Min Walking Distance (km)</label>
              <input
                type="number"
                value={minWalkingDistance}
                onChange={(e) => setMinWalkingDistance(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter min walking distance"
              />
            </div>
          </div>
        </div>

        <div className="relative w-96 h-80 border-4 border-gray-300 rounded-full flex flex-col items-center justify-center bg-white shadow-lg">
          <div className="absolute top-4 text-center">
            <div className="text-2xl font-bold">{time}</div>
            <div className="text-lg text-gray-600">{date}</div>
          </div>
          <div className="absolute top-20 w-1/2 flex flex-col space-y-4">
            <div className="bg-green-100 py-2 font-bold rounded-lg text-center">
              {minSleepHours ? `${minSleepHours} hrs of sleep` : 'Set Sleep Goal'}
            </div>
            <div className="bg-yellow-100 py-2 font-bold rounded-lg text-center">
              {minCaloriesBurnt ? `${minCaloriesBurnt} kcal goal` : 'Set Calorie Goal'}
            </div>
            <div className="bg-blue-100 py-2 font-bold rounded-lg text-center">
              {minSteps ? `${minSteps} steps goal` : 'Set Step Goal'}
            </div>
            <button onClick={()=>(router.push("/progress"))} className='text-white rounded-full hover:bg-white hover:text-black border border-black bg-black'>Log</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return <WatchSimulation />;
}