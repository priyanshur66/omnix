import Benefits from "@/components/Benefits";
import Component from "@/components/features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Landing() {
    return (
      <div className="bg-gray-900 min-h-screen text-white">
        
        <Navbar />
  
        
        <div className="container mx-auto px-6 py-20 relative">
          <div className="max-w-3xl ml-20">
            <h1 className="text-6xl font-bold mb-6">
              Future of WEB3 Marketing with BasedPay on Base.
            </h1>
            <p className="text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem elit, cursus ut velit nec, porta consequat massa. Suspendisse vitae lacus eros. Nulla nisl elit, molestie in congue sed, dignissim et nisl. 
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200">
              get instant on your daily purchases
            </button>
          </div>
  
          <div className="flex justify-between mt-20 border-t border-gray-700 mx-24 pt-8">
            <div>
              <div className="text-gray-400 text-xl">bsdke</div>
             
            </div>
            <div>
              <div className="text-gray-400 text-xl">APR</div>
      
            </div>
            <div>
              <div className="text-gray-400 text-xl">BasedPay points</div>
              
            </div>
            <div>
              <div className="text-gray-400 text-xl">Commissions</div>
             
            </div>
            
          </div>
  
        
          <div className="mr-1 absolute top-0 right-0 w-1/2  h-full bg-purple-500 rounded-full filter blur-3xl opacity-20">
          
          </div>
        </div>
        <Component />
        <Benefits />
        <Footer />
      </div>
    );
  }