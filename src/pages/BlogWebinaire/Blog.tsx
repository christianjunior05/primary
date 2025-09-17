const Blog= ()=> {
    return ( 
        <>
       <div className="w-96 flex flex-col  mb-10">
        <div className="w-auto h-72 bg-gris">

        </div>
        <span className="my-3">Categoriy</span>
        <span className="font-dmserif">Blog title heading will go here</span>
        <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
         <div className="flex space-x-4 items-center">
                  <div className="size-10"><img src="/e1.png" alt="" className="size-full object-cover object-center" /></div>
                   <div className="flex flex-col">
                     <span className="">Angel Monet</span>
                  <span className="">Professeur de physique</span>
                   </div>
                 
                </div>
       </div>
        </>
     );
}

export default Blog ;