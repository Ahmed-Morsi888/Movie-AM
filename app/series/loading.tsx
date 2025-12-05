import React from 'react'

function Loading() {
  return (
  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2'>
            {
            [...Array(15)].map((_, i) => (
                
                  <div key={i} className="w-full h-64 bg-gray-400 animate-pulse rounded-xl"></div>
          ))      
        }
        </div>
    
  )
}

export default Loading