
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";


export default function Parcours() {

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
    <div className="min-h-screen">
      {/* Hero */}
      <header
        className="relative w-full h-[480px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Hero2.jpg')" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(12, 11, 11, 0.38)" }}
        >
          
        </div>
        <div className="absolute flex flex-col items-start gap-3 left-[65px] top-1/2 transform -translate-y-1/2 w-[1184px]">
          <div className="text-white font-['DM_Serif_Display'] text-[40px] leading-[52px]">
            <span className="block">Offre Parcoursup® 360°</span>
          </div>
          <div className="text-white font-['DM_Serif_Display'] text-[25px] leading-[100%] mb-4">
            Votre allié pour
            <span className="text-yellow-400">  traverser Parcoursup en confiance</span>
            .
          </div>
          <div className="text-white font-['DM_Serif_Display'] text-[20px] leading-[30px] max-w-[900px]">
            Chaque année, Parcoursup est une étape décisive, souvent source de
            doutes et de stress pour les familles. Avec l’offre Parcoursup
            360°, vous bénéficiez d’un accompagnement global, méthodique et
            personnalisé pour sécuriser chaque étape.
          </div>
        </div>
      </header>


      {/* Ce que comprend l'accompagnement */}
      <section>
        <div className="flex justify-center items-center gap-10 my-20 ">
          <div className=" cursor-pointer size-96 rounded-lg">
    <video onClick={HandleClick} 
    ref={VideoRef} 
    src="/parcoursup.mp4"  
    poster="/w5.jpg"
    onEnded={HandleEnded}
    className="size-full  object-cover rounded-lg" />
          </div>

          <div className="w-6/12  space-y-4  ">
            <h1 className="text-3xl font-dmserif text-blue">

              <span className="text-jauneOr">Ce que comprend</span>  l’accompagnement :
            </h1>

            <div className="space-y-1 w-11/12">
              <div className="font-dmserif text-blue space-x-2">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <span>Un point de départ solide</span>
              </div>
              <p>
                Entretien approfondi pour comprendre votre parcours scolaire,
                vos centres d’intérêt, vos motivations et vos activités
                extrascolaires (sport, engagement associatif, bénévolat, stages,
                passions…). Tout ce qui peut valoriser votre dossier est pris en
                compte.
              </p>
            </div>

            <div className="space-y-1  w-11/12">
              <div className="font-dmserif text-blue space-x-2">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <span>Des choix d’établissements personnalisés</span>
              </div>
              <p>
                Recommandations précises et adaptées à votre profil et à votre
                projet, afin de cibler des formations cohérentes, accessibles et
                motivantes.
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-dmserif text-blue space-x-2">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <span>Des lettres de motivation impactantes</span>
              </div>
              <p>
                Aide à la rédaction et à l’optimisation des lettres de
                motivation, en mettant en valeur aussi bien vos résultats
                scolaires que vos expériences et qualités développées hors de
                l’école.
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-dmserif text-blue space-x-2">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <span>Un suivi pas à pas</span>
              </div>
              <p>
                Séances programmées et relectures personnalisées pour sécuriser
                chaque étape du <br /> calendrier Parcoursup®.
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-dmserif text-blue space-x-2">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <span>Un contrôle final</span>
              </div>
              <p>
                Vérification de l’ensemble du dossier avant la validation, pour
                éviter les erreurs et s’assurer que chaque élément reflète au
                mieux votre potentiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vos avantages exclusifs */}
      <section className=" ">
        <div className="flex   items-center gap-40 justify-center">
          <div className="space-y-6 w-5/12 ">
            <h2 className="text-3xl  text-blue font-dmserif ">
              Vos avantages exclusifs :
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <p>                <span className="font-medium">
                  Une méthodologie claire et rassurante</span> adaptée aux lycéens et étudiants.</p>

              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <p>Une <span className="font-medium">mise en valeur complète</span>  : scolaire + extra-scolaire.</p>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>

                <p>   Des <span className="font-medium">conseils personnalisés </span>  pour optimiser vos vœux
                  d’établissement  en cohérence avec vos ambitions..</p>

              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <p>L’accompagnement d’<span className="font-medium">un coach expert</span>  en orientation scolaire et Parcoursup®.</p>


              </li>
            </ul>
            <p>  <span className="text-jauneOr" >Résultat : </span>  un dossier solide, authentique et valorisant, qui vous permet de vous démarquer et d’aborder Parcoursup® avec confiance.
            </p>
          </div>
          <div className="size-96">
            <img
              src="/w1.jpg"
              alt="Avantages exclusifs"
              className="size-full rounded-lg object-cover"
            />
          </div>

        </div>
      </section>

      {/* Pourquoi un accompagnement ? */}
      <section className=" ">
        <div className=" my-20 flex  justify-center items-center gap-20 ">

          <div className="size-96">
            <img
              src="/w2.jpg"
              alt="Pourquoi accompagnement"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>


          <div className=" space-y-5 " >
            <h2 className="text-3xl font-dmserif text-blue ">
              Pourquoi <span className="text-jauneOr">un accompagnement ?</span>
            </h2>

            <div className="space-y-2 ">
              <div className="font-dmserif text-blue space-x-2">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <span>Décoder les attentes</span>
              </div>
              <p>
                Comprendre ce que recherchent réellement les établissements au-delà des notes.
              </p>
            </div>

            <div className="space-y-2 ">
              <div className="font-dmserif text-blue space-x-2">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <span>Valoriser tout le parcours</span>
              </div>
              <p>
                Mettre en avant le dossier scolaire mais aussi l’extra-scolaire (sport, engagement, stages, passions).
              </p>
            </div>

            <div className="space-y-2 ">
              <div className="font-dmserif text-blue space-x-2">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <span>Avancer avec méthode</span>
              </div>
              <p>
                Mettre en avant le dossier scolaire mais aussi l’extra-scolaire (sport, engagement, stages, passions).
              </p>
            </div>


            <p className="text-sm ">
              <span className="text-jauneOr">Résultat :</span>  un dossier clair, complet et valorisant.
            </p>
          </div>
        </div>
      </section>

      {/* Préparation aux entretiens de motivation */}
      <section className="">
        <div className=" flex gap-20 justify-center items-center">
          <div className=" space-y-5 w-6/12">
            <h2 className="text-3xl font-dmserif text-blue">
              Préparation <span className="text-jauneOr">aux entretiens de motivation</span>
            </h2>
            <p className=" w-11/12">
              De nombreuses formations sélectives demandent un entretien de
              motivation. Nous vous préparons avec une méthode éprouvée pour
              convaincre les jurys, en faisant ressortir votre profil.
            </p>
            <p>Avec Prometheor, vous vous entraînez dans des conditions réelles pour arriver confiant et convaincant le jour J.</p>
            <p>Les objectifs de la préparation :</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <GiCheckMark className="text-jauneOr mt-1" />
                <p>
                  <span className="font-medium">Comprendre les attentes d’un jury</span> : ce qui compte vraiment dans leurs critères d’évaluation.
                </p>
              </li>



              <li className="space-x-2 flex  ">

                <GiCheckMark className="  text-jauneOr mt-1   " />

                <p className="" > Savoir se mettre en avant : présenter son parcours, ses
                  engagements, passions et projets.</p>


              </li>
              <li className=" space-x-2  flex">

                <GiCheckMark className="  text-jauneOr mt-1   " />


                <p className="">
                  Apporter des arguments clairs et pertinents : relier son
                  profil à son projet.
                </p>
              </li>
              <li className=" space-x-2 flex ">
                <GiCheckMark className="  text-jauneOr mt-1   " />

                <p className="">
                  Se démarquer des autres candidats avec un discours authentique
                  et impactant.
                </p>
              </li>
            </ul>



          </div>

          <div className="size-96">
            <img
              src="Image14.jpg"
              alt="Préparation entretien"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

        </div>
      </section>

      {/* Pack Préparation */}
      <section className=" ">
        <div className="my-24 flex items-center justify-center gap-20 ">

          <div className=" w-6/12 space-y-4 bg-jauneOr/5 rounded-md p-5 ">
            <h3 className="text-3xl font-dmserif text-jauneOr ">
              Pack Préparation <span className="font-dmserif text-blue">(450 €)</span>
            </h3>
            <p className="font-dmserif text-blue">Les étapes de l'accompagnement</p>


            <div className="space-y-1 ">
              <div className="font-dmserif text-blue space-x-4">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <span>1. Séance préparation</span>
              </div>
              <p>
                Découverte de votre profil et travail sur les attentes d’un jury : critères, pièges à éviter, premières pistes de mise en valeur.
              </p>
            </div>

            <div className="space-y-1 ">
              <div className="font-dmserif text-blue space-x-4">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <span>2. Séance entraînement</span>
              </div>
              <p>
                Mise en situation avec questions types et spécifiques. <br /> Entretien blanc suivi d’un retour détaillé sur vos points forts et vos axes d’amélioration.
              </p>
            </div>


            <div className="space-y-1 ">
              <div className="font-dmserif text-blue space-x-4">
                <i className="fa-solid fa-graduation-cap text-jauneOr "> </i>
                <span>3. Séance répétition</span>
              </div>
              <p>
                Deuxième entretien blanc pour corriger vos erreurs, affiner vos réponses et renforcer votre confiance.
              </p>
            </div>

          </div>

          <div className="size-96">

            <img
              src="/parcourSupPreparation.png"
              alt="Pack préparation"
              className="size-full   object-cover "
            />

          </div>

        </div>
      </section>

      {/* Avis */}
      <section>
        <div className=" bg-blue  py-14 my-20 ">
          <h3 className="text-3xl font-dmserif text-jauneOr mb-14 text-center "> Ce qu'ils disent de l'accompagnement</h3>
          <div className="flex items-center gap-10  justify-center ">
            <FiArrowLeft className=" max-sm:hidden border size-10 p-2 shrink-0  rounded-full text-jauneOr border-jauneOr cursor-pointer hover:bg-jauneOr hover:text-white transition-all " />

            <div className="flex gap-10  flex-wrap justify-center items-center ">
              <div className={` w-72  max-sm:space-y-2  space-y-7 bg-white     p-5    flex flex-col  rounded-xl border`}>

                <p className=" max-md:text-base text-xs">Accompagnement très réussi auprès de mes fils. Sonia est une personne très qualifiée, à l'écoute de chaque élève avec des conseils très pertinents. Elle est également très disponible ! Je recommande vivement.</p>

                <div className="space-y-2">

                  <div className=" flex  text-sm max-md:text-base">
                    <i className="fa-solid fa-star text-orange"></i>
                    <i className="fa-solid fa-star text-orange"></i>
                    <i className="fa-solid fa-star text-orange"></i>
                    <i className="fa-solid fa-star text-orange"></i>
                    <i className="fa-solid fa-star text-orange"></i>
                  </div>
                  <div>
                    <span className="block text-xs">Charles</span>
                    <span className="block text-xs md:text-sm">Élève de terminale</span>
                  </div>

                </div>

              </div>

              <div className={` w-72  max-sm:space-y-2  space-y-10 bg-white     p-5    flex flex-col  rounded-xl border`}>
                {/* Commentaire */}
                <p className=" max-md:text-base text-xs">Un accompagnement et une aide de qualité dans la réorientation et l’utilisation de Parcoursup ainsi qu’un suivi jusqu’au bout. Merci !</p>

                {/* Étoiles */}


                {/* Nom et profession */}


                <div className="space-y-2">

                  <div className=" flex  text-sm max-md:text-base">
                    <i className="fa-solid fa-star text-orange"></i>
                    <i className="fa-solid fa-star text-orange"></i>
                    <i className="fa-solid fa-star text-orange"></i>
                    <i className="fa-solid fa-star text-orange"></i>
                    <i className="fa-solid fa-star text-orange"></i>
                  </div>
                  <div>
                    <span className="block text-xs">Gabrielle</span>
                    <span className="block text-xs">Élève en réorientation</span>
                  </div>

                </div>

              </div>


              <div className={` w-72  max-sm:space-y-2  space-y-10 bg-white     p-5    flex flex-col  rounded-xl border`}>

                <p className=" max-md:text-base text-xs">Superbe expérience ! J’ai réalisé plusieurs entretiens et tests pour Parcoursup qui m’ont bien aidé pour l’orientation tant pour les spécialités que pour les écoles.</p>

                <div className="space-y-2">

                  <div className=" flex  text-sm max-md:text-base">
                    <i className="fa-solid fa-star text-orange"></i>
                    <i className="fa-solid fa-star text-orange"></i>
                    <i className="fa-solid fa-star text-orange"></i>
                    <i className="fa-solid fa-star text-orange"></i>
                    <i className="fa-solid fa-star text-orange"></i>
                  </div>
                  <div>
                    <span className="block text-xs  ">Léa</span>
                    <span className="block text-xs">Classe de terminale</span>
                  </div>

                </div>

              </div>



            </div>
            <FiArrowRight className=" max-sm:hidden border shrink-0 size-10 p-2 rounded-full text-jauneOr border-jauneOr cursor-pointer hover:bg-jauneOr hover:text-white transition-all " />

          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="">
        <div className=" h-[500px] bg-resultats bg-no-repeat bg-cover my-10 flex flex-col justify-center pl-24" >
          <div className=" bg-white/80 text-blue w-5/12 p-6 rounded-md space-y-3">
            <h4 className="text-3xl font-dmserif text-blue">Et les résultats ?</h4>
            <p>À l’issue de la préparation : </p>
            <ul className="space-y-2">
              <li className=" space-x-2 ">
                <GiCheckMark className="  text-jauneOr  inline  " />

                <p className="inline">
                  Un discours structuré, clair et convaincant,
                </p>
              </li>

              <li className=" space-x-2 ">
                <GiCheckMark className="  text-jauneOr  inline " />

                <p className="inline">
                  Des arguments solides qui mettent en valeur votre parcours,
                </p>
              </li>
              
              <li className=" space-x-2 flex ">
                <GiCheckMark className="  text-jauneOr text-xl mt-1" />

                <p className="">
                  L’assurance nécessaire pour réussir votre entretien et obtenir la 
                  meilleure note possible. </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
