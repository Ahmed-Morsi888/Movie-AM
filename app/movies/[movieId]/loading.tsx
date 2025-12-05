export default function Loading() {
  return (
    <div className="w-full h-full bg-gray-900 pt-4 pb-4 animate-pulse">
      <div className="flex w-full flex-col md:flex-row md:gap-6 md:mx-auto">

        






        
        <div className="flex flex-col px-2 h-full w-full md:w-1/4">

          
          <div className="w-40 h-6 bg-gray-700 rounded mb-3"></div>

          <div className="flex gap-2 mb-3">
            <div className="w-10 h-4 bg-gray-700 rounded"></div>
            <div className="w-8 h-4 bg-gray-700 rounded"></div>
            <div className="w-12 h-4 bg-gray-700 rounded"></div>
          </div>

          
          <div className="w-full h-[22rem] bg-gray-700 rounded-xl"></div>
        </div>

        
        <div className="w-full px-2 md:p-0 md:w-1/2 mt-16 ">

          
          <div className="w-full h-20 bg-gray-800 rounded mb-3"></div>

          
          <div className="w-full h-12 bg-gray-800 rounded mb-3"></div>

          
          <div className="w-full h-12 bg-gray-800 rounded mb-3"></div>

          <div className="w-full h-16 bg-gray-800 rounded mb-3"></div>

          
          <div className="w-full h-12 bg-gray-800 rounded"></div>
        </div>







        <div className="flex flex-col justify-around mt-6 md:mt-0 h-90 md:w-1/4 w-full">
            
          <div className="flex justify-around gap-4 items-center">
            <div className="w-28 h-12 bg-gray-700 rounded mb-2"></div>
            <div className="w-28 h-12 bg-gray-700 rounded mb-1"></div>
            <div className="w-28 h-12 bg-gray-700 rounded"></div>
          </div>
         <div className="w-full mt-8">
        <div className="w-full h-80 bg-gray-800 rounded"></div>
      </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-8">
        <div className="w-40 h-6 bg-gray-800 rounded "></div>
        <div className="w-3/4 h-32 bg-gray-800 rounded my-4"></div>
        <div className="w-1/3 h-6 bg-gray-800 rounded"></div>
      </div>

    </div>
  );
}
