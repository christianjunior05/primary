import Button from "./miniComponents/Button";
import Title from "./miniComponents/Title";
import Coche from "./miniComponents/Coche";
import EnsavoirPlus from "./miniComponents/EnsavoirPlus";
import InfoProfile from "./miniComponents/InfoProfile";
import Temoignage from "./miniComponents/Temoignage";
import DivWebinaire from "./miniComponents/DivWebinar";
import { HiArrowRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";

// tout ce qui est ici concerne la page Homapage
export default function Homepage() {
  return (
    <div>
      {/*  entete de la page Homepage */}

  <header>
  <div className="bg-homepage h-[500px] bg-cover bg-center flex items-center px-6 md:px-20">
          <div className="text-white font-dmserif max-w-full space-y-7  ">
            <h1 className="text-2xl sm:text-4xl  md:text-5xl  leading-tight">
              La promesse d’une orientation choisie.
            </h1>
            <p className="text-base sm:text-lg md:text-xl  leading-relaxed">
              Donnez à votre enfant les clés de sa réussite, en toute confiance.
            </p>
            <Button text="Découvrir nos offres " icons={true} />
          </div>
        </div>
  </header>

      
   {/* L'origine de Prometheor */}

<section>
 {/* Image */}
      <div className="bg-homepagee mt-10   h-[300px] w-full md:h-[450px] bg-no-repeat bg-cover flex justify-center items-center"></div>
      {/* texte */}
      
      <div className=" bg-jauneOr/10  flex flex-col   bg-no-repeat bg-cover  justify-centern  items-center">
        <div className="w-1/2 flex flex-col items-center space-y-8 ">
          <h1 className="text-blue text-4xl font-dmserif">
            L'origine de Prometheor
          </h1>
          <p className=" text-center">
            Nous avons fondé Prometheor avec une conviction : l’orientation doit
            être à la fois humaine, moderne et ambitieuse.
          </p>
          <p className="text-center">
            {" "}
            <span className="text-jauneOr">Notre objectif </span>: est de
            transformer un moment souvent stressant en une expérience
            constructive, où chaque jeune peut découvrir son potentiel et tracer
            un chemin qui lui ressemble.
          </p>
          <p className=" text-center">
            Pour cela, nous avons réuni un réseau de conseillères d’orientation
            qualifiées partout en France et développé une plateforme digitale
            innovante. Elle centralise des outils pratiques, une méthode
            éprouvée et des ressources fiables, pour offrir un accompagnement à
            la fois personnalisé et structuré.
          </p>
         < div className="  flex  space-x-2  ">
           <IoCheckmark className=" text-jauneOr shrink-0 text-xl mt-1"/>
            <p className="  w-9/12 text-center ">Notre mission : donner à chaque adolescent les clés pour bâtir son
            avenir avec confiance et ambition.</p>
            
            
          </div>
          <Button text="Trouvez une conseillere" />
        </div>
      </div>

    
</section>
     

{/* section Choisir son orientation, 
ce n’est pas tirer au sort une filière   */}

<section>

    
      <div className="flex justify-center items-center my-10  gap-10 ">
        {/* Texte */}

<div className="w-[500px] h-[450px] ">
<img src="/h3.png" alt="" className="size-full object-cover object-center rounded-lg" />
</div>
      <div className=" w-1/2 space-y-5">
  <h5 className="text-4xl font-dmserif text-blue">Choisir son orientation, <br /> 
  <span className="text-jauneOr">ce n’est pas tirer au sort une filière</span> </h5>
          <p className="w-full md:w-10/12 leading-relaxed text-base md:text-lg text-blue">
            <span className="text-jauneOr">Notre méthode des 3 P </span>: simple, claire, efficace
            
          </p>
          <p>
            Grâce à la méthode des 3 P, l’orientation devient une progression simple et constructive, du
premier questionnement jusqu’au projet abouti.
          </p>

          <div className="space-y-3">
            <div className="space-x-2">     <i className="fa-solid fa-graduation-cap text-jauneOr flex-shrink-0"></i> <span>1. Personnalité : révéler qui je suis </span></div>
          <p>Découvrir ses talents, ses forces, ses centres d’intérêt.
          Apprendre à mieux se connaître pour construire un projet qui a du sens.</p>
          </div>

             <div  className="space-y-3">
            <div className="space-x-2">     <i className="fa-solid fa-graduation-cap text-jauneOr flex-shrink-0"></i> <span>2.  Parcours : explorer mes options </span></div>
          <p>Études courtes ou longues ? Université, école, lycée professionnel, prépa ?
Nous accompagnons à la découverte des établissements adaptés au profil du jeune.</p>
          </div>

             <div  className="space-y-3">
            <div className="space-x-2">  <i className="fa-solid fa-graduation-cap text-jauneOr flex-shrink-0"></i> <span>3. Projet: tracer ma route</span></div>
          <p>Rédiger un dossier, préparer un oral, organiser son planning, réussir Parcoursup…
Nous donnons les clés pour transformer le projet en plan concret, pas à pas.</p>
          </div>
      
        </div>

        {/* Image */}
      
      </div>

</section>

      {/* Nos solution d'orientation */}

<section>
  <div className="   mt-20  my-20 ">
        <div className="text-center  ">
          <Title text1="Nos solutions" text2="d'orientation" />
          <p className="text-blue mt-10 mb-14  max-md:mx-5 ">
            {" "}
            Prometheor propose différents packs d'orientation pensés pour
            répondre à votre besoin:
          </p>

          <div className=" flex justify-evenly   ">
            <EnsavoirPlus
              titre1="Pack"
              titre2="Repère"
              objectif="apporter un premier éclairage complet et répondre à vos questions."
              text1="Pour les collégiens qui veulent valider leur choix de voie (générale, technologique ou professionnelle)."
              text2="Pour aider les lycéens à choisir leurs spécialités et répondre à des interrogations spécifiques"
              text3=" Pour les parents qui s'interrogent sur l'orientation de leur enfant"
              image="/photo2.png"
            />

            <EnsavoirPlus
              image="EnsavoirPlus2.png"
              titre1="Pack"
              titre2="Exploration"
              objectif="Pour mieux se connaître et débuter sa démarche d'orientation"
              text1="Collégiens : pour transformer un premier intérêt en projet préparatoire pour la seconde."
              text2="Lycéens : pour commencer à construire son parcours d'orientation et initialiser son dossier Parcoursup"
              text3=" Étudiants qui s'interrogent sur une réorientation ou sur leur poursuite d’études."
            />
            <EnsavoirPlus
              image="EnsavoirPlus3.png"
              titre1="Pack"
              titre2="Trajectoire"
              objectif="Explorer son profil et construire une stratégie d'orientation complète"
              text1="Lycéens : pour définir et confirmer ses parcours d'orientation et construire sa stratégie Parcoursup"
              text2="Pour aider les lycéens à choisir leurs spécialités et répondre à des interrogations spécifiques"
            />

           
          </div>
        </div>
      </div>
</section>
    

      {/* Parck Personnalisé  */}

      <div className=" py-10 flex my-28 flex-col md:flex-row px-6 md:px-20 justify-center items-center gap-8 md:gap-12 bg-jauneOr/5  ">
        {/* Image */}
        <div className="h-64  md:h-72 w-full md:w-auto flex justify-center items-center">
          <img
            src="/h1.png"
            alt="Pack personnalisé"
            className="object-cover  h-full w-full "
          />
        </div>

        {/* Texte */}
        <div className="w-full md:w-7/12  space-y-4 md:space-y-6">
          <Title text1="Pack Personnalisé" text2="(100% sur mesure)" />
          <p className="text-base md:text-lg leading-relaxed text-gray-800 ">
            Chaque enfant est unique, avec ses forces, ses aspirations et
            parfois des besoins particuliers.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-800 ">
            Chez Prometheor, nous co-construisons un accompagnement adapté :
            rendez-vous de cadrage, mise en place d'une solution adaptée avec un
            suivi évolutif.
          </p>

          {/* Bouton inchangé */}
          <Button text="Contacter un conseiller " icons={true} />
        </div>
      </div>

      {/* Accompagnement Parcoursup */}

      <div className="flex  max-sm:my-10  flex-col md:flex-row items-center justify-center gap-8   my-28 ">
        {/* Image */}
        <div className="w-96  md:w-96 h-64 md:h-auto flex justify-center items-center">
          <img
            src="/section2.jpg"
            alt="Deux personnes assises en train d'échanger"
            className=" h-full w-full"
          />
        </div>

        {/* Texte */}
        <div className="w-full    space-y-4 md:w-7/12">
          <Title text1="Accompagnement" text2="Parcoursup" />
          <p className="text-base md:text-lg my-5">
            Module dédié aux élèves de terminale
          </p>

          <ul className="leading-7 md:leading-10 mb-5 space-y-2">
            <li>
              <Coche text3="Aide aux choix des voeux en fonction du profil et du dossier scolaire (top 3 + alternatives)" />
            </li>
            <li>
              <Coche text3="Aide à la rédaction des lettres de motivation et du dossier extra-scolaire" />
            </li>
            <li>
              <Coche text3="Préparation aux entretiens de motivation" />
            </li>
          </ul>

          {/* Bouton inchangé */}
          <Button text="En savoir plus " icons={true} />
        </div>
      </div>

      {/* Rencontrez nos conseillers */}

      <div className="flex my-10 justify-center gap-10  p-10  bg-jauneOr/5 flex-wrap">
        {/* Texte et liste */}
        <div className="w-full lg:w-7/12  space-y-4">
          <Title text1="Rencontrez " text2="nos conseillers" />
          <p className="text-base md:text-lg my-5">
            Nos Valeurs : écoute, neutralité, bienveillance : c'est la promesse
            de nos conseillers.
          </p>

          <ul className="my-5 space-y-4">
            <li>
              <Coche text2="Formation des conseillers certifiée Qualiopi" />
            </li>
            <li>
              <Coche text2='Notre expérience au coeur de notre méthode des "3P" (Personnalité, Parcours, Projet).' />
            </li>
            <li>
              <Coche text2="Mise à jour continue : maîtrise des dernières réformes (Parcoursup, filières émergentes, métiers de demain)." />
            </li>
            <li>
              <Coche text2="Expérience terrain : Des expertises complémentaires : méthodologie de travail, scolarité, troubles des apprentissages, gestion du stress." />
            </li>
          </ul>

          {/* Bouton inchangé */}
          <Button text="Trouver un conseiller" />
        </div>

        {/* Composant profil */}
        <div className="w-full lg:w-auto flex justify-center items-center">
          <InfoProfile />
        </div>
      </div>

      {/* nos chiffre clés */}

      <div className="bg-blue text-white p-10 my-20">
        <h4 className="font-dmserif text-center text-3xl md:text-4xl mb-10">
          Nos chiffres clés
        </h4>

        <ul className="flex flex-wrap justify-evenly items-start gap-10">
          <li className="flex flex-col items-center text-center max-w-[160px]">
            <img src="/photo7.png" alt="Icone expérience" className="mb-4" />
            <span className="text-jauneOr font-dmserif text-3xl my-2">
              +10 ans
            </span>
            <span className="text-xs">
              D'expérience dans l'orientation scolaire
            </span>
          </li>

          <li className="flex flex-col items-center text-center max-w-[160px]">
            <img src="/photo8.png" alt="Icone familles" className="mb-4" />
            <span className="text-jauneOr font-dmserif text-3xl my-2">
              +2 500
            </span>
            <span className="text-xs">Familles accompagnées depuis 2015</span>
          </li>

          <li className="flex flex-col items-center text-center max-w-[160px]">
            <img src="/photo9.png" alt="Icone satisfaction" className="mb-4" />
            <span className="text-jauneOr font-dmserif text-3xl my-2">94%</span>
            <span className="text-xs">
              Taux de satisfaction auprès des parents 
            </span>
          </li>

          <li className="flex flex-col items-center text-center max-w-[160px]">
            <img src="/photo10.png" alt="Icone élèves" className="mb-4" />
            <span className="text-jauneOr font-dmserif text-3xl my-2">500</span>
            <span className="text-xs">Élèves suivis en 2024</span>
          </li>

          <li className="flex flex-col items-center text-center max-w-[160px]">
            <img src="/photo11.png" alt="Icone formation" className="mb-4" />
            <span className="text-jauneOr font-dmserif text-3xl my-2">
              100%
            </span>
            <span className="text-xs">
              De nos conseillers ont suivi notre formation certifiée Qualiopi
            </span>
          </li>
        </ul>
      </div>

      {/* Temoignage d'anciens élèves */}

      <div className="my-20">
        <p className="text-center leading-10">
          <Title text1="Témoignage" text2="d'anciens élèves" />
          <span className="font-montserrat font-semibold">
            {" "}
            Ils ont réussi grâce à leur accompagnement avec Prometheor :
          </span>
        </p>
        <Temoignage />
      </div>

      {/* Webinaire & Blog */}

      <div className=" max-[1000px]:space-y-10  max-[1000px]:flex-wrap max-[1000px]:justify-center  flex justify-between items-center px-20 py-16 bg-jauneOr/15 ">
        <div className="  ">
          <div className=" max-[1000px]:flex max-[1000px]:flex-col  size-full ">
            <Title text1="Webinars " text2="& Blog" />
            <button className=" text-white  max-sm:text-xs  block mb-5 mt-7   bg-jauneOr py-4 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
              Découvrir le blog
              <HiArrowRight className="font-semibold text-xl ml-2  inline " />
            </button>

            <button className=" text-white block  max-sm:text-xs   bg-jauneOr py-4 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
              Découvir les Webinars
              <HiArrowRight className="font-semibold text-xl ml-2  inline " />
            </button>
          </div>
        </div>

        <div className="flex max-sm:flex-col   items-center gap-5">
          <div className="max-[730px]:grid    max-[730px]:grid-cols-1 max-[730px]:justify-center  max-[730px]:flex-wrap size-full grid grid-cols-2 gap-5">
            <DivWebinaire
              color={true}
              title="WEBINAR"
              text="Gestion du Stress"
            />
            <DivWebinaire
              color={false}
              title="BLOG"
              text="Actualitées orientation"
            />
            <DivWebinaire color={false} title="BLOG" text="Conseils pratique" />
            <DivWebinaire
              color={true}
              title="WEBINAR"
              text="Métiers d'avenir"
            />
          </div>

          <div className=" flex max-sm:flex-row  max-[730px]:hi flex-col items-center gap-5">
            <IoIosArrowDown className="border rotate-180 text-3xl p-1 cursor-pointer rounded-full text-gray-400 border-gray-400" />
            <IoIosArrowDown className="border text-3xl p-1 cursor-pointer rounded-full text-blue border-blue" />
          </div>
        </div>
      </div>

      {/*  Nos partenaire de confiance */}

      <div className="flex  max-[900px]:flex-col max-[900px]:items-center justify-center gap-10 my-20 px-6 md:px-20">
        {/* Image */}
        <div className="w-full md:w-[400px] h-[300px] flex justify-center">
          <img
            src="/photo12.png"
            alt="Partenaires"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Texte */}
        <div className="w-full md:w-1/2 flex flex-col justify-evenly gap-4">
          <Title text1="Nos" text2="partenaires de confiance" />
          <p className="text-xs text-jauneOr">
            Pour vous garantir un accompagnement complet et rigoureux,
            Prometheor collabore avec :
          </p>
          <p className="text-sm md:text-base">
            Afin d’offrir à chaque jeune un accompagnement complet, nous
            collaborons avec des partenaires de confiance tels qu’Anacours
            (soutien scolaire), Unisco (orientation et projets éducatifs) et
            SupÉtudes (accompagnement pour les études à l’international,
            notamment au Canada).
          </p>
          <p className="text-sm md:text-base">
            Grâce à cette complémentarité, nous proposons des solutions sur
            mesure, alliant suivi pédagogique, accompagnement personnalisé et
            ouverture vers l’étranger, pour guider chaque parcours vers la
            réussite.
          </p>
        </div>
      </div>

      {/* section  pret a passe a l'etape suivante */}
      <div className=" pl-20  max-sm:pl-5 place-content-center bg-footer my-10 h-[500px] bg-no-repeat bg-cover bg-center">
        <div className=" border flex flex-col justify-center items-start  space-y-4  max-[955px]:w-3/5 max-[550px]:w-4/5 max-[550px]:  w-2/5  py-5 px-10 bg-white/50 rounded-xl">
          <h2 className="max-xl:text-4xl max-[680px]:text-2xl  font-dmserif text-5xl text-blue ">
            {" "}
            Prêt à passer à l’étape suivante ?
          </h2>
          <p className=" max-xl:text-sm    font-lato ">
            Choisissez dès maintenant l’un de nos conseillers pour définir
            ensemble la formule la plus adaptée.
          </p>
          <p className="max-xl:text-sm  font-lato ">Prendre un rendez-vous :</p>
          <Button text="Trouver un conseiller " icons={true} />
        </div>
      </div>
    </div>
  );
}
