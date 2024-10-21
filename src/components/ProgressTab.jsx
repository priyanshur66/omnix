import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ProgressBar = ({ label, value, max, color }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="text-sm font-medium text-gray-700">
        {value}/{max}
      </span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
      <motion.div
        className="h-2.5 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const ProgressTab = ({ steps, runs, sleep, calories, walk }) => {
  const router = useRouter();
  const [progress, setProgress] = useState({
    steps: steps,
    runs: runs,
    sleep: sleep,
    calories: calories,
  });

  const handleClubRouter = () => {
    router.push("/club-creation");
  };

  const handleWatchSimulation = () => {
    router.push("/watchSimulation");
  };

  useEffect(() => {
    // const generateRandomProgress = () => ({
    //   steps: Math.floor(Math.random() * 10000),
    //   runs: Math.floor(Math.random() * 10),
    //   sleep: Math.floor(Math.random() * 12),
    //   calories: Math.floor(Math.random() * 3000),
    // });
    // setProgress(generateRandomProgress());
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col items-center -mt-16 justify-center min-h-screen p-4">
      <motion.div
        className="w-full max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 text-center text-indigo-600"
          variants={itemVariants}
        >
          My Progress
        </motion.h2>
        <div className="space-y-4">
          <motion.div variants={itemVariants}>
            <ProgressBar
              label="steps"
              value={10}
              max={progress.steps}
              color="#4CAF50"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProgressBar
              label="runs"
              value={10}
              max={progress.runs}
              color="#2196F3"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProgressBar
              label="sleep"
              value={10}
              max={progress.sleep}
              color="#9C27B0"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProgressBar
              label="calories"
              value={10}
              max={progress.calories}
              color="#FF9800"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="flex flex-col sm:flex-row justify-center w-full gap-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-bold w-full sm:w-auto"
          onClick={handleClubRouter}
        >
          Collect remaining amount
        </button>
        <button
          className="bg-black hover:bg-white hover:text-black text-white py-2 px-6 rounded-full font-bold w-full sm:w-auto"
          onClick={handleWatchSimulation}
        >
          Simulate Workout
        </button>
      </div>
    </div>
  );
};

export default ProgressTab;
