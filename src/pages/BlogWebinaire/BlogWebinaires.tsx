import { FaArrowRight } from "react-icons/fa";
import Blog from "./Blog";

const BlogWebinaires= ()=> {
    return ( 

        <>
       <header>
        <div className="h-[400px] bg-herooo" >
      <div className="size-full pl-10 flex flex-col space-y-5 justify-center backdrop-brightness-90 ">
        <h1 className="text-4xl font-dmserif text-white ">Notre <span className="text-jauneOr"> blog</span> et <span className="text-jauneOr">nos webinaires</span> </h1>
        <p className="font-montserrat text-white text-xl w-9/12 " > Nous croyons que chaque élève possède un potentiel unique. À travers nos articles et nos webinaires, nous partageons des stratégies pour surmonter les difficultés, renforcer la confiance en soi et développer des habitudes de travail durables. </p>
        <p className="font-montserrat text-white text-xl w-9/12 " >De la gestion du temps à la préparation aux examens, en passant par des ressources pédagogiques concrètes, Prometheor offre un  soutien complet pour progresser <br /> sereinement.</p>
      </div>
        </div>
       </header>

       <section>
        <div className="w-11/12  m-auto space-y-10 my-10">
            <h2 className=" text-3xl font-dmserif text-blue">Nos <span className="text-jauneOr"> webinaires</span></h2>
            <div className="flex items-center  gap-10">
                <div className="size-96 bg-gris">

                </div>
                <div className="space-y-3">
                    <span className="font-roboto">WEBINAIRE</span>
                    <h3 className="text-xl font-dmserif text-jauneOr">Webinaire title heading will go here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in <br /> eros.</p>
                <div className="flex space-x-4 items-center">
                  <div className="size-10"><img src="/e1.png" alt="" className="size-full object-cover object-center" /></div>
                   <div className="flex flex-col">
                     <span>Angel Monet</span>
                  <span>Professeur de physique</span>
                   </div>
                 
                </div>
                </div>
   
         <FaArrowRight className=" rounded-full border-2 border-black hover:cursor-pointer shrink-0 text-5xl  p-3 hover:bg-black hover:text-white transition-all "/>
            </div>
        </div>
       </section>


        <section>
          <div className="space-y-10 my-20   ">
         <h4 className="text-blue font-dmserif text-3xl   ml-10  ">Notre <span className="text-jauneOr">blog</span> </h4>
  <ul className="flex space-x-10">
    <li className=" border-b-4 border-jauneOr  ml-10 ">Tout voir </li>
    <li>Catégorie 1</li>
    <li>Catégorie 2</li>
    <li>Catégorie 3</li>
    <li>Catégorie 4</li>
  </ul>

  <div className="flex justify-center gap-5 flex-wrap">
    <Blog/>
    <Blog/>
    <Blog/>
    <Blog/>
    <Blog/>
    <Blog/>
  </div>
          </div>
       </section>
        </>
    );
}

export default BlogWebinaires ;