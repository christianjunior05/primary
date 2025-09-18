
import Coche from "../Homepage/miniComponents/Coche";
import Title from "../Homepage/miniComponents/Title";
import ListElement from "../exploration/miniComponents/ListElement";
import Section4 from "../PacksRepere/sectionComponents/Section4";
import Section5 from "../PacksRepere/sectionComponents/Section5";
import Section6 from "../PacksRepere/sectionComponents/Section6";
import { IoCheckmark } from "react-icons/io5";

import { useRef } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";


const Trajectoire= ()=> {




const VideoRef=useRef<HTMLVideoElement>(null)



const  HandleClick=()=>{

if (VideoRef.current) {
  VideoRef.current.play()
}


}

const HandleEnded=()=>{

if (VideoRef.current) {
  VideoRef.current.load()
}

}







    return (  

        <div>
<div className="bg-trajectoireHeader h-[400px] bg-cover bg-center flex items-center">
        
        <div className="  backdrop-brightness-50 size-full flex flex-col justify-center">

        <div className=" md:px-10    text-white font-dmserif max-w-full  ">
         
            <p className="text-2xl sm:text-3xl md:text-4xl mb-5 leading-snug">
              De l’orientation à l’action : un plan complet et concret pour avancer
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Un parcours complet pour définir son profil, explorer les formations adaptées.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              L’accompagnement qui transforme les doutes en décisions.
            </p>
          </div>

        </div>
        
          
        </div>

<div className=" flex justify-center items-center gap-10 my-32 flex-wrap">
      {/* Image */}
      <div className=" size-[500px] cursor-pointer border max-lg:w-80 max-lg:h-80 max-md:w-64 max-md:h-64 bg-gris ">
          <video onClick={HandleClick} 
    ref={VideoRef} 
    src="/trajectoire.mp4"  
    poster="/w4.jpg"
    onEnded={HandleEnded}
    className="size-full  object-cover" />
      </div>

      {/* Texte */}
      <div className="py-10 w-1/2 max-lg:w-7/12 max-md:w-full space-y-4 p-5 rounded-lg bg-jauneOr/5 text-sm flex flex-col items-start justify-around">
        <p className="text-3xl max-lg:text-2xl max-md:text-xl font-dmserif text-blue">
         Donnez à votre enfant les clés pour définir son projet et réussir Parcoursup avec confiance.
        </p>
        <p className="text-base max-md:text-sm">... Le Pack Trajectoire  est conçu pour offrir un accompagnement complet et structuré, depuis la découverte du profil et des intérêts de votre enfant jusqu’à la sélection précise de formations et d’établissements. Un parcours en plusieurs étapes pour avancer avec confiance, clarté et des choix solides pour l’avenir.</p>
        <p className="text-blue font-dmserif text-2xl max-lg:text-xl max-md:text-lg">
          À qui s’adresse 
          <span className="text-jauneOr">ce pack ?</span>
        </p>

        <ul className="space-y-4 mb-3">
          <li className="flex">
            <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />
          Lycéens : Définir et confirmer ses parcours d'orientation pour construire sa stratégie Parcoursup
          </li>
          <li className="flex">
            <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />{" "}
          Étudiants : valider ses choix de poursuite d'études
          </li>
       
        </ul>

          <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
         Trouver une conseillère
           
            </button>

      </div>
    </div>

<div className="flex flex-col md:flex-row items-center justify-center gap-5 my-6 mx-5 md:mx-20">

  <div className="space-y-5 w-full md:w-9/12">
    <Title
      text1="Objectif du pack"
      text2="trajectoire"
      text3="(690€)"
    />

    <p className="text-blue font-lato">
      Aider votre enfant à mieux se connaître, clarifier son projet, identifier les parcours qui lui correspondent et préparer Parcoursup avec sérénité
    </p>
    <span className="text-jauneOr block">un accompagnement en 5 étapes :</span>

    <div className="space-y-5">

      <div className="space-y-4 text-sm">
        <ul><Coche text3="1. Séance repère" /></ul>

        <div>
          <span>Écoute des besoins et questionnements de votre enfant</span>
          <ul>
            <ListElement text="Bilan de sa scolarité, ses difficultés, son organisation de travail" />
            <ListElement text="Réponses aux questions de l’élève et/ou des parents" />
          </ul>
        </div>
      </div>

      <div className="space-y-4 text-sm">
        <ul><Coche text3="2. Séance exploration" /></ul>
        <ul>
          <ListElement text="Temps d'échanges avec le conseiller" />
          <ListElement text="Passation de tests psychométriques" />
          <ListElement text="Travail exploratoire  sur des exercices de connaissance de soi" />
          <ListElement text="Travail approfondi sur la connaissance de soi" />
        </ul>
      </div>

      <div className="space-y-4 text-sm">
        <ul><Coche text3="3. Séance bilan" /></ul>
        <div>
          <span>Remise d’une synthèse personnalisée</span>
          <ul>
            <ListElement text="Propositions de secteurs d'activité adaptés au profil de l’élève" />
            <ListElement text="Mise en place d’un plan d’actions :" />
            <ListElement text="Choix des enseignements de spécialité" />
            <ListElement text="Orientation vers une filière adaptée" />
            <ListElement text="Premières pistes d'établissements adaptés" />
          </ul>
        </div>
      </div>



      <div className="space-y-4 text-sm">
        <ul><Coche text3="4. Séance d'échange " /></ul>
        <ul>
          <ListElement text="Affinement et validation du projet professionnel" />
          <ListElement text="Discussion approfondie autour des choix envisagés" />
         
        </ul>
      </div>

      <div className="space-y-4 text-sm">
        <ul><Coche text3="5. Séance finale " /></ul>
        <ul className="">
          <ListElement text="Remise d'une synthèse personnalisée et complète" />
          <ListElement text="Sélection de formations et d’établissements correspondant aux objectifs fixés et au profil de votre enfant" />
         
        </ul>
      </div>
    </div>
  </div>

  <div className="w-full md:w-[495px] h-[300px] md:h-[500px]">
    <img src="/trajectoireSection2.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
  </div>

</div>






  <div
          className={`bg-trajectoireSection3 bg-cover bg-center h-[500px] flex flex-col justify-center my-32`}
        >
          <div className="space-y-5 ml-20 max-sm:mx-2 max-[1100px]:w-3/5 max-[740px]:w-4/5   w-6/12 shrink-0  p-6 rounded-xl bg-white/80">
            <h5 className="text-4xl  font-dmserif text-blue">
           À l’issue du Pack Trajectoire, votre enfant aura ?
            </h5>
    
            <ul className="text-blue text-lg space-y-2">
              <li className="max-md:text-xs space-x-2 flex items-baseline" >
                <GoPlus className="text-jauneOr inline mr-1 " /> <p>Une meilleure connaissance de lui-même et de ses atouts.</p>
              </li>
              <li className="max-md:text-xs space-x-2 flex items-baseline" >
                <GoPlus className="text-jauneOr inline mr-1 " /> <p> Un projet professionnel affiné et validé</p> 
              </li>
              <li className="max-md:text-xs space-x-2 flex items-baseline" >
                <GoPlus className="text-jauneOr inline mr-1 " /> <p>Un choix d’études clair et une stratégie solide pour Parcoursup.</p>
              </li>
            </ul>
    
               <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
          Contacter un conseiller <HiArrowRight className="font-semibold text-lg  inline " />
     
        </button>
          </div>
        </div>

  <Section6

  image="h1.png"
  text1="Besoin de personnalié "
  text2="votre accompagnement ?"
  textbutton1="Contacter un conseiller " 
 paragraphe1="Chaque enfant est unique, avec ses forces, ses aspirations et parfois des besoins particuliers."
 paragraphe2="Chez Prometheor, nous co-construisons un accompagnement  adapté :  Rendez-vous de cadrage, mise en place d'une solution adaptée avec un suivi évolutif."
  icon={true}

/>

  <Section4

  img1={true}
    img2={true}
    img3={true}
    commentaire1="Nous étions perdus entre la voie générale et la voie pro ; le Pack Repère nous a donné un éclairage limpide en une heure."
    commentaire2="Ma fille doutait de sa spécialité S ; grâce au Pack Repère, elle est passée en toute sérenité en Première." 
    commentaire3="Ma fille doutait de sa spécialité S ; grâce au Pack Repère, elle est passée en toute sérenité en Première."
    profession1="Parents de X"  
    profession2= "Parents de X"
    profession3="Parents de X"
    nom1="Mme et M. Lefevre, Bordeaux"
    nom2="Mme et M. Lefevre, Bordeaux"
    nom3="Mme et M. Lefevre, Bordeaux"
    dimenssion="w-80 h-60"
/>

 <Section5
  Title="Prêt à avancer ?"
  text="Contacter un conseiller pour un premier échange téléphonique :"
   textbutton="Trouver un conseiller"
   image="bg-trajectoireSection5"


  />

    <div className="  ml-16   flex items-center justify-center gap-20  max-sm:space-x-0 my-20 ">
  
    <div className=" size-96  rounded-xl">
      <img src="/photo5.jpg" alt="image" className="size-full object-cover rounded-xl "/>
    </div>
    <div className="  w-5/12  space-y-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex flex-col ">
      <h2 className="text-blue font-lato font-dmserif  text-4xl max-md:text-center  "> Découvrez  <span className="text-jauneOr">nos autres packs</span>   </h2>
         
  <div className="space-x-6 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-x-0 max-sm:space-y-6 ">
  
  
   <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
     <span>Pack exploration </span> 
      
          <HiArrowRight className="font-semibold text-lg  inline " />
      
      </button>
  
       <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
     <span>Pack repère</span>  
        
          <HiArrowRight className="font-semibold text-lg  inline " />
     
      </button>
  </div>
  
    </div>
  </div>
        </div>
    );
}

export default Trajectoire ;