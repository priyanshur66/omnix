import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-800 rounded-b-3xl px-4 sm:px-10 lg:mx-20 pt-4 pb-4 sm:pt-6 sm:pb-6">
      <Link href="\landing">
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-white">BasedPay</div>
      </Link>
      
      <div className="flex items-center">
        <button className="bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full hover:bg-gray-200">
          CONNECT WALLET
        </button>
      </div>
    </nav>
  );
}