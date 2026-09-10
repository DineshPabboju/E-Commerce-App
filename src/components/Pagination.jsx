import React from 'react'

const getPages = (current, total) =>{
    const pages = [];
    if(total <= 5){
        for (let i =1; i <= total; i++){
            pages.push(i)
        }
    }else {
        if(current <= 3) {
            pages.push(1,2,3,'...', total)
        } else if (current >= total-2){
            pages.push(1,'...', total-2, total-1, total)
        } else {
            pages.push(1, '...', current-1, current, current+1, '...', total)
        }
    }
    return pages;
}

const Pagination = ({page, pageHandler, dynamicPage}) => {
  return (
    <div className='mt-12 mb-6 flex items-center justify-center gap-2'>
        <button 
          disabled={page===1} 
          className='bg-white border border-purple-200 text-purple-700 hover:bg-purple-600 hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-purple-700 px-4 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-2xs cursor-pointer disabled:cursor-not-allowed'
          onClick={()=>pageHandler(page - 1)}
        >
          &larr; Prev
        </button>

        <div className='flex items-center gap-1.5'>
          {
              getPages(page, dynamicPage)?.map((item, index) =>{
                  return (
                      <span key={index} 
                        onClick={()=> typeof item === "number" && pageHandler(item)}
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs transition-all ${
                          typeof item === "number" ? 'cursor-pointer' : 'cursor-default'
                        } ${
                          item === page 
                            ? "bg-purple-600 text-white shadow-xs font-bold" 
                            : "text-slate-600 hover:text-purple-600 hover:bg-purple-50 font-medium"
                        }`}
                      >
                          {item}
                      </span>
                  )
              })
          }
        </div>

        <button 
          disabled={page===dynamicPage} 
          className='bg-white border border-purple-200 text-purple-700 hover:bg-purple-600 hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-purple-700 px-4 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-2xs cursor-pointer disabled:cursor-not-allowed'
          onClick={()=>pageHandler(page + 1)}
        >
          Next &rarr;
        </button>
    </div>
  )
}

export default Pagination
