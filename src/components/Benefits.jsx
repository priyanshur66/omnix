export default function Benefits() {
    return (
      <div className="bg-gray-900 text-white py-20 mx-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center -mt-8 mb-12">Benefits of BasedPay</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Interoperability */}
            <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold">Interoperability</h3>
              </div>
              <p className="text-gray-400">
              Etiam ac ante nulla. nunc tempor.
              </p>
            </div>
  
            {/* High-Yield Staking */}
            <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold">High-Yield earning</h3>
              </div>
              <p className="text-gray-400">
              Etiam ac ante nulla. nunc tempor.
              </p>
            </div>
  
            {/* Efficient Liquidity Provision */}
            <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold">Efficient BasedPay</h3>
              </div>
              <p className="text-gray-400">
              Etiam ac ante nulla. nunc tempor.
              </p>
            </div>
  
            {/* Cutting-Edge Security */}
            <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold">BasedPay</h3>
              </div>
              <p className="text-gray-400">
              Etiam ac ante nulla. nunc tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }