"use client"
import React, { useState, useEffect } from 'react';
import SimulationNavbar from "@/components/SimulationNav";

const WatchSimulation = () => {
  const [sleep, setSleep] = useState('');
  const [calories, setCalories] = useState('');
  const [steps, setSteps] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
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
    <>
    <div className="bg-slate-300 min-h-screen">
    <SimulationNavbar />
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-10 p-6 max-w-5xl mx-auto space-y-6 md:space-y-0 mt-10 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] rounded-xl">
      
      <div className="bg-gray-100 mr-40 p-6 rounded-md w-full md:w-1/3 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Activity Input Form</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Add Sleep (Hours)</label>
            <input
              type="number"
              value={sleep}
              onChange={(e) => setSleep(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter sleep hours"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Burn Calories (Kcal)</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter calories burned"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Add Steps</label>
            <input
              type="number"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter steps"
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
            {sleep ? `${sleep} hrs of sleep` : 'Add Sleep'}
          </div>
          <div className="bg-yellow-100 py-2 font-bold rounded-lg text-center">
            {calories ? `${calories} kcal burned` : 'Burn Calories'}
          </div>
          <div className="bg-blue-100 py-2 font-bold rounded-lg text-center">
            {steps ? `${steps} steps taken` : 'Add Steps'}
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default function App() {
  return <WatchSimulation />;
}
