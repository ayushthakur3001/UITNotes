
function Card({name , src, msg}) {
    return (
        
            
            <div className="xl:h-60 xl:ml-20 scrollbar
            xl:left-28 notes md:w-2/12 hover:scale-105 transform
            flex-col space-y-4 space xl:flex-col
            xl:top-50 relative xl:w-2/12  
                bg-gray-500 rounded-md
                w-7/12 h-4/6 top-2 font-bold ">
                <p className="font-extrabold text-xl bottom-32 xl:top-3
                xl:shadow-xl  absolute">{name}</p>
                
                <p className="text-white absolute top-14 font-sm mt-4 xl:text-gray-600 ">{msg}</p>

                <img className="xl:w-5/12 xl:left-14 xl:h-30 w-3/12 h-18 bottom-2 right-2 text-center absolute "
                 src={src} 
            
                 alt="img"/>
                
            </div>

        
            
        
    )
}

export default Card
