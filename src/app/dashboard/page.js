import Navbar from "@/components/Navbar";

export default function Dashboard() {
    return (
      <div className="bg-gray-900 min-h-screen ">
        <Navbar />
        <main className="bg-gray-800 rounded-lg p-1 mx-20 border border-green-500 mt-10">
          <div className="grid grid-cols-3 gap-4">

            <div className="text-center">
              <h2 className="text-lg font-semibold text-white ">Title</h2>
            </div>

            <div className="text-center">
              <h2 className="text-lg font-semibold text-white ">Rewards Distributed</h2>
            </div>

            <div className="text-center">
              <h2 className="text-lg font-semibold text-white ">New Signups to Your App</h2>
            </div>

          </div>
        </main>
        <div className="text-white ml-20">
            knsdfnsknd
        </div>
      </div>
    )
  }