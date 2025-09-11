import { HiArrowRight } from "react-icons/hi2";
import Button from "../components/Homepage/miniComponents/Button";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Conseillers() {
  return (
    <div>
      <div className="min-h-screen">
        {/* Hero Section - Transformé en Tailwind CSS */}
        <header
          className="relative w-full h-[480px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/HeroC.png')" }}
        >
          {/* Overlay - rgba(12, 11, 11, 0.38) */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(12, 11, 11, 0.38)" }}
          ></div>

          {/* Hero Content */}
          <div className="absolute flex flex-col items-start gap-3 left-[65px] top-1/2 transform -translate-y-1/2 w-[1184px] h-[247px]">
            {/* Hero Badge - Label qualité OPRA */}
            <div className="w-[1184px] h-[105px] text-white font-['DM_Serif_Display'] font-normal text-[40px] leading-[52px] order-0 flex-none">
              Nos conseillers d’orientation <br /> Allier écoute et expertise
              pour accompagner parents et élèves
            </div>

            {/* Hero Title */}
            <div className="w-[838px] h-[28px] text-white font-['DM_Serif_Display'] font-normal text-[25px] leading-[100%] order-1 flex-none mb-4">
              Chez Prometheor, chaque réussite repose sur un accompagnement de
              qualité.Nos conseillers font preuve d’écoute, de rigueur et de
              neutralité.
            </div>

            {/* Hero Description */}
            <div className="w-[1184px] h-[90px] text-white font-['DM_Serif_Display'] font-normal text-l leading-[30px] order-2 self-stretch flex-none mt-2">
              Engagés par notre Charte Qualité, ils mettent leurs compétences au
              service de chaque jeune pour répondre aux questions, clarifier les
              choix d’orientation et construire un parcours cohérent et adapté à
              son profil.
            </div>
          </div>
        </header>

        {/* Section: Des conseillères qualifiées et expertes */}

        <div className="flex justify-center items-center gap-20 my-20">
          <div className="w-full">
            <h1 className="text-4xl text-center font-dmserif  mb-4 text-blue ">
              Trouver un conseiller <br />
              <span className=" text-jauneOr  text-[20px]">
                À vos côtés, à chaque instant grâce à une équipe de conseillers
                dédiés{" "}
              </span>
            </h1>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>

                <p className="">
                  Un apprentissage structuré des systèmes éducatifs, des
                  filières d'études et des débouchés professionnels.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Des mises en situation concrètes, basées sur des études de cas
                  réels et des simulations d'entretien, pour maîtriser les
                  différentes étapes de l'accompagnement.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Une certification finale, validant les compétences théoriques
                  et pratiques indispensables à l'exercice du métier.
                </p>
              </div>
            </div>
            <p className=" mt-4">
              De plus, elles suivent un programme de formation continue
              certifié, leur garantissant une mise à jour constante de leurs
              connaissances sur les filières d'études, les métiers émergents et
              les évolutions du système éducatif.
            </p>
          </div>
        </div>

        {/* Section: Un accompagnement 100% personnalisé */}
        <section className=" ">
          <div className="flex  flex-wrap  justify-center gap-20  items-center">
            <div className="bg-jauneOr/5 p-5 rounded-lg w-6/12 ">
              <h2 className="text-4xl  text-blue font-dmserif mb-6">
                Un accompagnement{" "}
                <span className="text-jauneOr">100% personnalisé</span>
              </h2>
              <p className="text-lg  mb-6">
                Chaque élève est unique, et son projet d'avenir doit l'être
                aussi. Nous avons conçu une approche individualisée qui prend en
                compte :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                  <p className="">
                    Ses aptitudes et centres d'intérêt, grâce à des bilans
                    d'orientation approfondis
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                  <p className="">
                    Sa personnalité et ses motivations, via des entretiens
                    personnalisés
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                  <p className="">
                    Ses résultats académiques et son environnement familial,
                    pour formuler des recommandations réalistes et ambitieuses
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                  <p className="">
                    Les tendances du marché du travail, afin de l'aider à faire
                    des choix éclairés et porteurs d'avenir
                  </p>
                </div>
              </div>
              <p className=" mt-6">
                Les conseillères ne proposent jamais de solutions toutes faites.
                Elles co-construisent avec l'élève et ses parents un projet sur
                mesure, qui correspond à ses aspirations et lui ouvre des
                perspectives solides.
              </p>
            </div>
            <div className=" size-[500px] rounded-lg ">
              <img
                src="/45c4858ae07bf0aab2c507ef6cc8ec257a259ef3.jpg"
                alt="Conseillère souriante"
                className="object-cover size-full  rounded-lg"
              />
            </div>
          </div>
        </section>

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



        {/* Section: Une méthodologie éprouvée et innovante */}
        <section className="">
          <div className="flex justify-center gap-20 items-center flex-wrap my-20">
            <div className="size-[500px] rounded-lg flex items-center justify-center">
              <img
                src="/conseillers2.png"
                alt="Conseillère souriante"
                className="object-cover size-full  rounded-lg"
              />
            </div>
            <div className="w-6/12">
              <h2 className="text-4xl text-blue font-dmserif mb-6">
                Formations de conseillers{" "}
                <span className="text-jauneOr">certifié Qualiopi </span>
              </h2>
              <p className="text-lg mb-6">
                Pour assurer un accompagnement de qualité, chaque conseiller
                suit un parcours de formation interne validé par la
                certification Qualiopi.
              </p>
              <p className="text-lg mb-6">
                Parmi les outils clés qu’ils maîtrisent figure la méthode des 3
                P Personnalité, Parcours, Projet – qui permet d’analyser
                rapidement et efficacement le profil de chaque élève :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                  <p className="">
                    Personnalité : identifier les traits de caractère et les
                    aptitudes.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                  <p className="">
                    Parcours : prendre en compte le cheminement scolaire et
                    personnel.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                  <p className="">
                    Projet : définir des pistes concrètes (métiers, filières,
                    formations) adaptées au profil.
                  </p>
                </div>
              </div>
              <p className=" mt-6">
                Ce savoir-faire leur permet de guider chaque élève, quelle que
                soit sa situation, vers des choix éclairés et cohérents.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Une amélioration continue de nos services */}
        <section className="">
          <div className="flex justify-center gap-20 items-center my-20">
            <div className="size-[500px] rounded-lg flex items-center justify-center">
              <img
                src="/conseillers3.png"
                alt="Conseillère souriante"
                className="object-cover size-full rounded-lg"
              />
            </div>
            <div className="w-6/12">
              <h2 className="text-4xl text-blue font-dmserif mb-6">
                Vous souhaitez échanger avec un conseiller ?
              </h2>
              <p className="text-lg  mb-6">
                <span className="text-jauneOr">
                  +Premier échange téléphonique de 15 minutes{" "}
                </span>
                :nous identifions la formule d'accompagnement la plus adaptée .
              </p>
              <p className="text-lg  mb-6">
                <span className="text-jauneOr">+Écoute bienveillante </span>
                :chaque conseillère prend le temps de comprendre votre contexte
                scolaire, les forces et les freins de l’élève.
              </p>
              <p className="text-lg  mb-6">
                <span className="text-jauneOr">+Disponibilités flexibles </span>
                :rendez-vous en présentiel et/ou visioconférence .
              </p>
              <p className="text-lg  mb-6">
                <span className="text-jauneOr">+Réponses sous 24h ouvrées </span>
                votre demande est prise en charge dans les meilleurs délais.
              </p>
              <Button text="Trouver un conseiller" icons={false} />
            </div>
          </div>
        </section>
          {/* Section: Call to Action */}
            
        
              <section>
                     <div className={`  max-sm:pl-5 bg-conseil   pl-20 place-content-center  my-10 h-[400px] bg-no-repeat bg-cover `} >
                           <div className="  space-y-5 max-md:w-4/5  w-2/5   py-5 pl-10 bg-white/80 rounded-xl">
                           <h2 className=" max-sm:text-xl font-dmserif text-2xl  text-blue "> Envie d’accompagner les jeunes dans leurs choix d’avenir ?</h2>
                           <p className="  font-lato  text-sm"> Nous formons des conseillers d’orientation capables d’écouter, d’analyser et de proposer des solutions concrètes pour construire des projets d’études et de carrière adaptés. </p>
                                     <button className=" text-white   max-sm:text-sm  bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                                        Découvrir nos formations <HiArrowRight className="font-semibold text-xl  inline "/>
                             </button>
                
                           </div>
                  </div>
              </section>
      </div>
    </div>
  );
}
