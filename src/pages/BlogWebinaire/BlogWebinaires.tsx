import { FaArrowRight } from "react-icons/fa";
import Blog from "./Blog";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

 type typage ={

  id: number;
  title: string;
  sub_title: string;
  slug: string;
  body: string;
  status: "published" | "draft"; // selon ton backend
  cover_photo_path: string;
  photo_alt_text: string | null;
  published_at: string;  // format "YYYY-MM-DD HH:mm:ss"
  created_at: string;    // format ISO "YYYY-MM-DDTHH:mm:ss.sssZ"
  updated_at: string;

  user_id: number;
  user: {
    id: number;
    name: string;
    email: string;
  };

  categories: {
    id: number;
    name: string;
    slug: string;
    pivot: {
      post_id: number;
      category_id: number;
    };
  }[];
};



const BlogWebinaires= ()=> {



const [Articles,setArticle]=useState<typage[] >([])


const handleArticle=async ()=>{

  const response = await axios.get("https://blogingapp.roomcodetraining.com/api/posts")
  console.log(response.data.data)
  setArticle(response.data.data)
}

useEffect(()=>{
  handleArticle()
},[])


const filtre = (id_categorie:number) => {
  const nouvelleTab = Articles.filter(article =>
    article.categories.some(category => category.id === id_categorie)
  );
  setArticle(nouvelleTab);
}








    return ( 

        <>
       <header>
        <div className="h-[400px] bg-herooo mt-20" >
      <div className="size-full pl-10 flex flex-col space-y-5 justify-center backdrop-brightness-90 ">
        <h1 className="text-4xl font-dmserif text-white ">Notre <span className="text-jauneOr"> blog</span> et <span className="text-jauneOr">nos webinaires</span> </h1>
        <p className="font-medium text-white text-xl w-9/12 " > Nous croyons que chaque élève possède un potentiel unique. À travers nos articles et nos webinaires, nous partageons des stratégies pour surmonter les difficultés, renforcer la confiance en soi et développer des habitudes de travail durables. </p>
        <p className="font-medium  text-white text-xl w-9/12 " >De la gestion du temps à la préparation aux examens, en passant par des ressources pédagogiques concrètes, Prometheor offre un  soutien complet pour progresser  sereinement.</p>
      </div>
        </div>
       </header>

       <section>
        <div className="w-11/12  m-auto space-y-10 my-10">
            <h2 className=" text-3xl font-dmserif text-blue">Nos <span className="text-jauneOr"> webinaires</span></h2>
            <div className="flex items-center  gap-10">
                <div className="h-96  w-[450px]">
<iframe 

  src="https://www.youtube.com/embed/mOB_Fv0ePIY" 
  title="YouTube video player" 

  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  className="size-full"
>
</iframe>


                </div>
                <div className="space-y-3">
                <span className="font-roboto">WEBINAIRE</span>
                <h3 className="text-xl font-dmserif text-jauneOr">3 conseils pour choisir vos enseignements de spécialités</h3>
                 
                </div>
   
         <FaArrowRight className=" rounded-full border-2 border-black hover:cursor-pointer shrink-0 text-5xl  p-3 hover:bg-black hover:text-white transition-all "/>
            </div>
        </div>
       </section>


        <section>
          <div className="space-y-10 my-20   ">
         <h4 className="text-blue font-dmserif text-3xl   ml-10  ">Notre <span className="text-jauneOr">blog</span> </h4>
  <ul className="flex space-x-10">
    <li onClick={handleArticle} className=" cursor-pointer border-b-4 border-jauneOr  ml-10 ">Tout voir </li>
    <li onClick={()=>filtre(1)} className=" cursor-pointer">Catégorie 1</li>
    <li onClick={()=>filtre(2)} className="cursor-pointer ">Catégorie 2</li>
    <li onClick={()=>filtre(3)} className="cursor-pointer ">Catégorie 3</li>
    <li onClick={()=>filtre(4)} className="cursor-pointer ">Catégorie 4</li>
  </ul>

 { 
  
  Articles ?
  
  <div className="grid grid-cols-3 px-10 gap-5">
    <Blog/>
  {Articles.map((article)=>(
    
        <div className="flex flex-col  mb-10 bg-gray-50  ">
        <div className="w-full h-80 bg-gris">
          <img className="size-full object-cover object-top"  src="/article.png" alt="" />
        </div>
     
     <div className="p-2 space-y-3">
  <span className="font-dmserif my-2 block "> {article.title} </span>
        <Link  to="/article" className="my-5 inline-block  cursor-pointer">
         <p className="hover:text-jauneOr transition-all"> {article.sub_title} </p>
        </Link>
     </div>
      
      
        </div>
  ))}
  </div>:
  <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-6">
      <div className="text-center">
        {/* Illustration */}
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-32 w-32 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12c0 7.5-7.5 9-7.5 9s-7.5-1.5-7.5-9a7.5 7.5 0 1115 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2.25m0 3.75h.008v.008H12V15z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Aucun article disponible
        </h1>

        <p className="text-gray-600 mb-6">
          Revenez plus tard ou explorez d'autres sections de notre site.
        </p>

        <a
          href="/"
          className="px-6 py-3 bg-jauneOr hover:bg-opacity-80 text-white rounded-2xl shadow hover:bg-blue-700 transition-all"
        >
          Retour à l’accueil
        </a>
      </div>
  </div>
  }
          </div>
      </section>
        </>
    );
}

export default BlogWebinaires ;