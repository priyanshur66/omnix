"use client"
import Navbar from "@/components/Navbar";
import useReadFromBasePayContract from "@/hooks/useReadFromBasePayContract";
import { useAccount } from "wagmi";
export default function Dashboard() {
  const {address} = useAccount()
  const { resData: web3ProjectData } = useReadFromBasePayContract({ funcName: "addressToWeb3Project", paraArr: [address] });
  console.log(web3ProjectData)
  return (
    <div className="bg-gray-900 min-h-screen ">
      <Navbar />
      <main className="bg-gray-800 rounded-lg p-1 mx-20 border border-green-500 mt-10">
        <div className="grid grid-cols-3 gap-4">

          <div className="text-center">
            <h2 className="text-lg font-semibold text-white ">{web3ProjectData?.[0]}</h2>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold text-white ">Rewards Distributed</h2>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold text-white ">New Signups to Your App</h2>
          </div>

        </div>
        <div className="grid grid-cols-3 gap-4">

          <div className="text-center">
            <h2 className="text-lg font-semibold text-white ">{"Campaign Results"}</h2>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold text-white ">{(Number(String(web3ProjectData?.[4]))-Number(String(web3ProjectData?.[9])))}</h2>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold text-white ">1</h2>
          </div>

        </div>
      </main>
      
    </div>
  )
}