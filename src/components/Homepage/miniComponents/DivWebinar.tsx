type Typage ={
    color:boolean,
    title:string,
    text:string
}

import { HiArrowRight } from "react-icons/hi2";
const  DivWebinaire=({color,text,title}:Typage)=> {
    return (
        < div className=" flex flex-col h-72 w-60 rounded-md">
            <div className=" bg-gris rounded-t-md h-1/2">
                
            </div>
            <div className=" bg-white space-y-1 rounded-b-md h-1/2 p-4 leading-7 flex flex-col items-start justify-center">
                <span className=  {`${color ? 'bg-blue':'bg-jauneOr'}  block font-roboto text-xs  text-white px-3 py-1 rounded-full`} > {title} </span>
                <span className="block font-dmserif text-blue"> {text} </span>
                         <button className="text-jauneOr  " > <span>Lire l'article </span> <HiArrowRight className="inline " /> </button>   

            </div>
        </div>
    );
}

export default DivWebinaire;