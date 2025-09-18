import Title from "../Homepage/miniComponents/Title";
import Coche from "../Homepage/miniComponents/Coche";
import { TbPointFilled } from "react-icons/tb";
import Section4 from "../PacksRepere/sectionComponents/Section4";
import Section5 from "../PacksRepere/sectionComponents/Section5";
import ListElement from "./miniComponents/ListElement";
import { useRef } from "react";
import { IoCheckmark } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { HiArrowRight } from "react-icons/hi2";

const Exploration = () => {
  const VideoRef = useRef<HTMLVideoElement>(null);

  const HandleClick = () => {
    if (VideoRef.current) {
      VideoRef.current.play();
    }
  };

  const HandleEnded = () => {
    if (VideoRef.current) {
      VideoRef.current.load();
    }
  };

  return (
    <div>
      <header>
        <div className="bg-exploration h-[400px] bg-cover bg-center flex items-center">
          <div className="backdrop-brightness-50 size-full flex flex-col justify-center">
            <div className="px-6  md:px-10 space-y-4  text-white font-dmserif max-w-full ">
              <p className="text-2xl sm:text-3xl md:text-4xl leading-snug ">
                Explorer pour mieux se <span></span>
                <span className="text-jauneOr">
                    connaître et choisir sa voie
                </span>
              </p>
              <p className="text-base max-w-3xl sm:text-lg md:text-xl leading-relaxed">
                Un accompagnement qui aide à mieux se connaître, identifier ses
                intérêts et ouvrir les premières pistes d’orientation en toute
                confiance.
              </p>
              <p className="text-sm sm:text-base md:text-xl leading-relaxed">
                Derrière chaque réussite se trouve un accompagnement qui fait la
                différence.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Donnez à votre enfant les clés pour définir son projet et réussir Parcoursup avec confiance. */}

      <section>
        <div className=" flex justify-center items-center gap-10 my-32 flex-wrap">
          {/* Image */}
          <div className=" size-[500px] cursor-pointer border max-lg:w-80 max-lg:h-80 max-md:w-64 max-md:h-64 bg-gris ">
            <video
              onClick={HandleClick}
              ref={VideoRef}
              src="/exploration.mp4"
              poster="/w3.jpg"
              onEnded={HandleEnded}
              className="size-full  object-cover"
            />
            <h1 className="text-blue text-center mt-2 text-xl">Cliquez sur l'image pour regarder la vidéo </h1>
          </div>

          {/* Texte */}
          <div className="py-10 w-1/2 max-lg:w-7/12 max-md:w-full space-y-4 p-5 rounded-lg bg-jauneOr/5 text-sm flex flex-col items-start justify-around">
            <p className="text-3xl max-lg:text-2xl max-md:text-xl font-dmserif text-blue">
              Votre enfant hésite sur la voie à suivre ? Il ne sait pas encore
              quels métiers pourraient lui convenir ou comment orienter ses
              choix scolaires ?...
            </p>
            <p className="text-base max-md:text-sm">
              ... Le Pack Exploration l’accompagne pour mieux se connaître grâce
              à des tests et exercices ciblés de connaissance de soi, découvrir
              des secteurs d’activité en accord avec ses forces et ses
              motivations, et clarifier ses choix.
            </p>
            <p className="text-blue font-dmserif text-2xl max-lg:text-xl max-md:text-lg">
              À qui s’adresse <span></span>
              <span className="text-jauneOr">ce pack ?</span>
            </p>

            <ul className="space-y-4 mb-3">
              <li className="flex space-x-2">
                <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />
                <p>
                  
                  Collégiens : transformer un premier intérêt en projet
                  préparatoire pour la seconde.
                </p>
              </li>
              <li className="flex space-x-2">
                <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />
                <p>
                  Lycéens: pour commencer à construire son parcours
                  d'orientation et initialiser son dossier Parcoursup
                </p>
              </li>

              <li className="flex space-x-2">
                <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />
                <p>
                  Étudiants qui s'interrogent sur une réorientation ou sur leur
                  poursuite d’études.
                </p>
              </li>
            </ul>

            <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
              Trouver une conseillère
            </button>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 my-6 mx-5 md:mx-20">
        <div className="space-y-5 w-full md:w-7/12">
          <Title text1="Objectif du" text2="pack exploration" text3="(490€)" />

          <p className="text-blue font-lato">
            Aider votre enfant à y voir clair dans ses options scolaires et
            professionnelles, en identifiant ses atouts, ses centres d’intérêt
            et les pistes d’orientation les plus cohérentes avec son profil
          </p>
          <span className="text-jauneOr block">
            Un accompagnement en 3 étapes :
          </span>

          <div className="space-y-5">
            <div className="space-y-4 text-sm">
              <ul>
                <Coche text3="1. Séance repère" />
              </ul>

              <div>
                <span>
                  Écoute des besoins et questionnements de votre enfant
                </span>
                <ul>
                  <li className="">
                    <TbPointFilled className="inline" />
                    <span>
                      
                      Bilan de sa scolarité, ses difficultés, son organisation
                      de travail
                    </span>
                  </li>
                  <li className="">
                    <TbPointFilled className="inline" />
                    <span>
                      Réponses aux questions de l’élève et/ou des parents
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <ul>
                <Coche text3="2. Séance exploration" />
              </ul>
              <ul>
                <ListElement text="Temps d'échanges avec le conseiller" />
                <ListElement text="Passation de tests psychométriques" />
                <ListElement text="Travail exploratoire  sur des exercices de connaissance de soi" />
                <ListElement text="Travail approfondi sur la connaissance de soi" />
              </ul>
            </div>

            <div className="space-y-4 text-sm">
              <ul>
                <Coche text3="3. Séance bilan" />
              </ul>
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
          <img
            src="/explorsection1.png"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div
        className={` bg-explorsection4 bg-cover bg-center h-[500px] flex flex-col justify-center my-32`}
      >
        <div className="space-y-5 ml-20 max-sm:mx-2 max-[1100px]:w-3/5 max-[740px]:w-4/5   w-6/12 shrink-0  p-6 rounded-xl bg-white/80">
          <h5 className="text-4xl  font-dmserif text-blue">
            À l'issue de la séance :
          </h5>

          <ul className="text-blue text-lg space-y-2">
            <li className="max-md:text-xs space-x-2 flex items-baseline">
              <GoPlus className="text-jauneOr inline mr-1 " />
              <p>
                Une vision claire du profil et des motivations de votre enfant.
              </p>
            </li>
            <li className="max-md:text-xs space-x-2 flex items-baseline">
              <GoPlus className="text-jauneOr inline mr-1 " />
              <p>
                
                Des secteurs d’activité adaptés à ses intérêts et aptitudes.
              </p>
            </li>
            <li className="max-md:text-xs space-x-2 flex items-baseline">
              <GoPlus className="text-jauneOr inline mr-1 " />
              <p>
                
                Un plan d’actions concret pour orienter ses choix scolaires et
                extrascolaires.
              </p>
            </li>
          </ul>

          <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
            Contacter un conseiller
            <HiArrowRight className="font-semibold text-lg  inline " />
          </button>
        </div>
      </div>

      <Section4
        img1={true}
        img2={true}
        img3={true}
        commentaire1="Nous étions perdus entre la voie générale et la voie pro ; le Pack Repère nous a donné un éclairage limpide en une heure."
        commentaire2="Ma fille doutait de sa spécialité S ; grâce au Pack Repère, elle est passée en toute sérenité en Première."
        commentaire3="Ma fille doutait de sa spécialité S ; grâce au Pack Repère, elle est passée en toute sérenité en Première."
        profession1="Parents de X"
        profession2="Parents de X"
        profession3="Parents de X"
        nom1="Mme et M. Lefevre, Bordeaux"
        nom2="Mme et M. Lefevre, Bordeaux"
        nom3="Mme et M. Lefevre, Bordeaux"
        dimenssion="w-80 h-60"
      />

      <Section5
        Title="Prêt à avancer ?"
        text="Contactez un conseiller pour un premier échange téléphonique:"
        textbutton="Trouver un conseiller "
        image="bg-explorsection5 "
      />

      <div className="  ml-16   flex items-center justify-center gap-20  max-sm:space-x-0 my-20 ">
        <div className=" size-96  rounded-xl">
          <img
            src="/explorsection6.jpg"
            alt="image"
            className="size-full object-cover rounded-xl "
          />
        </div>
        <div className="  w-5/12  space-y-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex flex-col ">
          <h2 className="text-blue font-lato font-dmserif  text-4xl max-md:text-center  ">
            
            Découvrez <span className="text-jauneOr">
              nos autres packs
            </span>
          </h2>

          <div className="space-x-6 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-x-0 max-sm:space-y-6 ">
            <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
              <span>Pack repère </span>

              <HiArrowRight className="font-semibold text-lg  inline " />
            </button>

            <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
              <span>Pack trajectoire</span>

              <HiArrowRight className="font-semibold text-lg  inline " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exploration;
