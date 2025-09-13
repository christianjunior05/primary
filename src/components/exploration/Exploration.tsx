import Header from "../Header";
import Title from "../Homepage/miniComponents/Title";
import Coche from "../Homepage/miniComponents/Coche";
import { TbPointFilled } from "react-icons/tb";
import Section3 from "../PacksRepere/sectionComponents/Section3";
import Section4 from "../PacksRepere/sectionComponents/Section4";
import Section5 from "../PacksRepere/sectionComponents/Section5";
import Section6 from "../PacksRepere/sectionComponents/Section6";
import ListElement from "./miniComponents/ListElement";
import { useRef } from "react";
import { IoCheckmark } from "react-icons/io5";

const Exploration= ()=> {


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
<Header
homepage={false}
packsrepere={false}
exploration={true}
trajectoire={false}
/>


{/* Donnez à votre enfant les clés pour définir son projet et réussir Parcoursup avec confiance. */}

<div className=" flex justify-center items-center gap-10 my-32 flex-wrap">
      {/* Image */}
      <div className=" size-[500px] cursor-pointer border max-lg:w-80 max-lg:h-80 max-md:w-64 max-md:h-64 bg-gris ">
          <video onClick={HandleClick} 
    ref={VideoRef} 
    src="/exploration.mp4"  
    poster="/w3.jpg"
    onEnded={HandleEnded}
    className="size-full  object-cover" />
      </div>

      {/* Texte */}
      <div className="py-10 w-1/2 max-lg:w-7/12 max-md:w-full space-y-4 p-5 rounded-lg bg-jauneOr/5 text-sm flex flex-col items-start justify-around">
        <p className="text-3xl max-lg:text-2xl max-md:text-xl font-dmserif text-blue">
Votre enfant hésite sur la voie à suivre ? Il ne sait pas encore quels métiers pourraient lui convenir ou comment orienter ses choix scolaires ?...        </p>
        <p className="text-base max-md:text-sm">
... Le Pack Exploration l’accompagne pour mieux se connaître grâce à des tests et exercices ciblés de connaissance de soi, découvrir des secteurs d’activité en accord avec ses forces et ses motivations, et clarifier ses choix.
</p>
        <p className="text-blue font-dmserif text-2xl max-lg:text-xl max-md:text-lg">
       À qui s’adresse 
          <span className="text-jauneOr">ce pack ?</span>
        </p>

        <ul className="space-y-4 mb-3">
          <li className="flex">
            <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />
Collégiens : transformer un premier intérêt en projet préparatoire pour la seconde.     
     </li>
          <li className="flex">
            <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />{" "}
   Lycéens:  pour commencer à construire son parcours d'orientation et initialiser son dossier Parcoursup
          </li>

          <li className="flex">
                        <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />{" "}
                       Étudiants qui s'interrogent sur une réorientation ou sur leur poursuite d’études.
                      </li>
       
        </ul>

          <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
        Trouver une conseillère
           
            </button>

      </div>
</div>




<div className="flex flex-col md:flex-row items-center justify-center gap-10 my-6 mx-5 md:mx-20">

  <div className="space-y-5 w-full md:w-7/12">
    <Title
      text1="Objectif du"
      text2="pack exploration"
      text3="(490€)"
    />

    <p className="text-blue font-lato">
      Aider votre enfant à y voir clair dans ses options scolaires et professionnelles, en identifiant ses atouts, ses centres d’intérêt et les pistes d’orientation les plus cohérentes avec son profil
    </p>
    <span className="text-jauneOr block">Un accompagnement en 3 étapes :</span>

    <div className="space-y-5">

      <div className="space-y-4 text-sm">
        <ul><Coche text3="1. Séance repère" /></ul>

        <div>
          <span>Écoute des besoins et questionnements de votre enfant</span>
          <ul>
            <li className="">
              <TbPointFilled className="inline" /> <span> Bilan de sa scolarité, ses difficultés, son organisation de travail</span>
            </li>
            <li className="">
              <TbPointFilled className="inline" /> <span>Réponses aux questions de l’élève et/ou des parents</span>
            </li>
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

    </div>
  </div>

  <div className="w-full md:w-[495px] h-[300px] md:h-[500px]">
    <img src="/explorsection2.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
  </div>

</div>


 <Section3
  text1="À l'issue de la séance :"
  text2="  Une vision claire du profil et des motivations de votre enfant."
  text3=" Des secteurs d’activité adaptés à ses intérêts et aptitudes."
  text4=" Un plan d’actions concret pour orienter ses choix scolaires et extrascolaires."
  textButton="contacter un conseiller "
  icons={true}
  image="bg-explorsection4 "
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
text='Contactez un conseiller pour un premier échange téléphonique:'
textbutton="Trouver un conseiller "
image="bg-explorsection5 "


/>

<Section6

  image="explorsection6.jpg"
  text1="Découvrez "
  text2="nos autres packs"
  textbutton1="Pack repère "
  textbutton2="Pack trajectoire "
  icon={true}
  
/>
        </div>
     );
}

export default Exploration ;