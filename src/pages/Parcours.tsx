import {  FaStar, FaArrowRight } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

export default function Parcours() {
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
        ></div>
        <div className="absolute flex flex-col items-start gap-3 left-[65px] top-1/2 transform -translate-y-1/2 w-[1184px]">
          <div className="text-white font-['DM_Serif_Display'] text-[40px] leading-[52px]">
            <span className="block">Offre Parcoursup 360°</span>
          </div>
          <div className="text-white font-['DM_Serif_Display'] text-[25px] leading-[100%] mb-4">
            Votre allié pour
            <span className="text-yellow-400">
              
              traverser Parcoursup® en confiance
            </span>
            .
          </div>
          <div className="text-white font-['DM_Serif_Display'] text-[20px] leading-[30px] max-w-[900px]">
            Chaque année, Parcoursup® est une étape décisive, souvent source de
            doutes et de stress pour les familles. Avec l’offre Parcoursup®
            360°, vous bénéficiez d’un accompagnement global, méthodique et
            personnalisé pour sécuriser chaque étape.
          </div>
        </div>
      </header>

      {/* Ce que comprend l'accompagnement */}
      {/* Ce que comprend l'accompagnement */}
      <section>
        <div className="flex justify-center items-center gap-10 my-20 ">
          <div className=" size-96 rounded-lg">
            <img
              src="/parcours.jpg"
              alt=""
              className="size-full rounded-lg object-cover"
            />
          </div>

          <div className="w-7/12  space-y-4  ">
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
        <div className="flex my-20   items-center gap-32 justify-center">
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
            src="/7.jpg"
            alt="Avantages exclusifs"
            className="size-full rounded-lg object-cover"
          />
          </div>
        
        </div>
      </section>

      {/* Pourquoi un accompagnement ? */}
      <section className="my-20 ">
        <div className="flex my-10 justify-center items-center gap-20 ">
         
         <div className="size-96">
         <img
            src="/parcours3.jpg"
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
             
                 <GiCheckMark className="  text-jauneOr mt-1   "/>
              
                <p className="" > Savoir se mettre en avant : présenter son parcours, ses
                  engagements, passions et projets.</p>
               
             
              </li>
              <li className=" space-x-2  flex">
               
                 <GiCheckMark className="  text-jauneOr mt-1   "/>
          
               
                <p className="">
                  Apporter des arguments clairs et pertinents : relier son
                  profil à son projet.
                </p>
              </li>
              <li className=" space-x-2 flex ">
                 <GiCheckMark className="  text-jauneOr mt-1   "/>
               
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
      <section className=" my-20">
        <div className=" flex items-center justify-center gap-20 ">
          <div className=" rounded-xl w-6/12 space-y-4  ">
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
            className="size-full  border object-cover"
          />

          </div>
      
        </div>
      </section>

      {/* Avis */}
      <section className="py-16 bg-blue">
        <div className="container mx-auto px-6">
          <h2 className="text-white text-center text-2xl font-bold mb-10">
            Ce qu’ils disent de l’accompagnement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  “Très bonne expérience d'orientation pour notre fils grâce à
                  l'expertise et à l’écoute. Merci !”
                </p>
                <div className="text-sm text-gray-500">Julie – Parent</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white/90 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue mb-3">
              Et les résultats ?
            </h3>
            <p className="text-gray-700 mb-3">À l’issue de la préparation :</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">
                  <FaArrowRight />
                </span>
                <span>Un dossier structuré, clair et convaincant.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">
                  <FaArrowRight />
                </span>
                <span>
                  Des arguments solides qui mettent en valeur votre parcours.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">
                  <FaArrowRight />
                </span>
                <span>
                  L’assurance nécessaire pour réussir votre entretien et obtenir
                  la meilleure voie possible.
                </span>
              </li>
            </ul>
          </div>
          <img
            src="/IMG4.png"
            alt="Résultats"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
}
