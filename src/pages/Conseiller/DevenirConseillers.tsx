import { GiCheckMark } from "react-icons/gi";
import { HiArrowRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";


export default function DevenirConseillers() {
  return (
  <div className="min-h-screen">
      
    <header>
        <div className="bg-DevenezConseiler mb-20 h-[400px] bg-cover bg-center flex items-center">
        
        <div className="  size-full flex flex-col justify-center">

        <div className=" md:px-10    text-white font-dmserif max-w-full  ">
         
            <p className="text-2xl sm:text-3xl md:text-4xl mb-5 leading-snug">
            Devenez conseiller d’orientation scolaire
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
             Nous vous formons à accompagner chacun vers un avenir aligné et porteur de sens.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
         
         Grâce à un parcours structuré et pratique, vous apprendrez à guider, écouter
         
            </p>
            <p  className="text-sm sm:text-base md:text-lg leading-relaxed"> et révéler le potentiel de chaque personne.</p>
          </div>

        </div>
        
          
        </div>
    </header>

      <section className="">
        
          <div className="flex justify-center gap-10 flex-wrap  items-center">
            <div className=" w-[500px] h-[550px] ">
              <img
                src="/w8.png"
                alt="Jeunes construisant leur avenir"
                className="object-cover size-full rounded-lg"
              />
            </div>

            <div className=" border-black w-6/12 space-y-5">
              <h2 className="text-4xl text-blue font-dmserif w-10/12">
             Un métier d’avenir, une activité  indépendante, un réseau solide</h2>
              <p className="   ">
               Vous souhaitez accompagner les jeunes dans leurs choix d’orientation scolaire et professionnelle tout en développant votre propre activité ?
              </p>
              <p className="">Nous vous proposons une formation complète et certifiante, basée sur 14 ans d’expérience , pour vous permettre de devenir conseiller d’orientation scolaire indépendant et de réussir dans ce métier passionnant.
                </p>
                <h3 className="text-xl font-dmserif text-blue" >Pourquoi suivre  <span className="text-jauneOr">cette formation avec nous ?</span></h3>
               <div className="text-jauneOr font-dmserif"><i className="fa-solid fa-graduation-cap text-jauneOr mr-2"></i> <span>Une expertise de terrain éprouvée</span></div>
                <p>“ Depuis plus de 14 ans, j’accompagne des centaines de jeunes et de familles dans leurs décisions d’orientation. J’ai développé une méthode d’accompagnement efficace et bienveillante, basée sur l’écoute, des outils précis et un suivi adapté aux besoins de chacun.”</p>
               <p> Sonia DRIDI, co-fondatrice de Prometheor</p>
            </div>
          </div>
     
      </section>

      {/* Section 2: Une équipe de conseillers engagée */}
      <section className="">
       
          <div className="flex justify-center gap-16 items-center flex-wrap my-32">
 
      <div className="space-y-5 w-5/12">
  <div className="text-jauneOr text-xl font-dmserif"><i className="fa-solid fa-graduation-cap text-jauneOr mr-2"></i>  <span>Une formation concrète et pratique</span></div>

   <ul className="space-y-2">
    <li className="flex "><GiCheckMark className=" mt-2  text-jauneOr mr-2  shrink-0 "/> <span>Comprendre les enjeux de l’orientation scolaire et professionnelle</span></li>
    <li className="flex  "><GiCheckMark className=" mt-2  text-jauneOr mr-2  shrink-0  "/> <span>Maîtriser les outils indispensables : bilans d’orientation, tests, entretiens, plateformes d’information</span></li>
    <li className="flex  "><GiCheckMark className=" mt-2  text-jauneOr mr-2  shrink-0  "/> <span>Développer son activité indépendante : prospection, gestion des clients</span></li>
    <li className="flex  "><GiCheckMark className=" mt-2  text-jauneOr mr-2  shrink-0  "/> <span>Savoir accompagner les jeunes et leurs familles avec justesse et impact</span></li>
   </ul>
     <div className="text-jauneOr text-xl font-dmserif"><i className="fa-solid fa-graduation-cap text-jauneOr mr-2"></i>  <span>Un accompagnement personnalisé</span></div>
 <p>En plus de la formation, je vous propose :</p>
  <ul className="space-y-2">
    <li className="flex  "><GiCheckMark className=" mt-2  text-jauneOr mr-2  shrink-0"/> <span>Un suivi individuel pour répondre à vos questions</span></li>
    <li className="flex  "><GiCheckMark className=" mt-2  text-jauneOr mr-2  shrink-0"/> <span>Des cas pratiques et des mises en situation réelles</span></li>
    <li className="flex  "><GiCheckMark className=" mt-2  text-jauneOr mr-2 shrink-0 "/> <span>L’accès à un réseau de conseillers indépendants avec qui partager vos expériences et évoluer</span></li>
   </ul>
      </div>
            <div className="">
              <img
                src="/w9.jpg"
                alt="Équipe de conseillers"
                className="object-cover size-full "
              />
            </div>
          </div>
       
      </section>

      {/* Section 3: Une vision complète de l'accompagnement */}
      <section className="">
        
          <div className="flex  items-center justify-center gap-10  ">
            <div className="">
              <img
                src="/w10.jpg"
                alt="Vision complète de l'accompagnement"
                className="object-cover size-full rounded-lg"
              />
            </div>
            <div className="   space-y-5 w-6/12  ">
              <h2 className="text-3xl font-dmserif text-blue">
                Formation de conseiller <span className="text-jauneOr" >certifiée Qualiopi</span> 
              </h2>
              <p className=" ">Pour assurer un accompagnement de qualité, chaque conseiller suit un parcours de formation interne  la certification Qualiopi.  
              </p>

              <p>Parmi les outils clés qu’ils maîtrisent figure la méthode des 3 P  Personnalité, Parcours, Projet – qui permet d’analyser rapidement et efficacement le profil de chaque élève  :</p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>                 
                    <p className="">Personnalité : identifier les traits de caractère et les aptitudes.</p>
                  
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i> 
                  <p className=""></p>          
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i> 
                 <p className="">Parcours : prendre en compte le cheminement scolaire et personnel.</p>              
                </li>

                    <li className="flex items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i> 
                 <p className="">Projet : définir des pistes concrètes (métiers, filières, formations) adaptées au profil.</p>              
                </li>
              </ul>
              <p className=" ">
             Ce savoir-faire leur permet de guider chaque élève, quelle que soit sa situation, vers des choix éclairés et cohérents.
              </p>
            </div>
          </div>
      
      </section>

      <section>
        <div className="flex justify-center my-20 gap-44 py-20 bg-jauneOr/15">
            <div className="space-y-5">
                <h4 className="text-blue font-dmserif text-4xl">Les indicateurs de satisfaction</h4>
                <span className="block">Les taux mesurés:</span>
                <ul className="space-y-4">
                    <li><GiCheckMark className="  text-jauneOr inline "/> <span>La satisfaction globale : 100%</span></li>
                    <li><GiCheckMark className="  text-jauneOr  inline "/> <span>Contenu de la formation : 100%</span></li>
                    <li><GiCheckMark className="  text-jauneOr inline  "/> <span>Compétences de la formatrice : 100%</span></li>
                </ul>
                <button className=" max-lg:text-xs text-white text-sm space-x-8   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                  <span> Découvrir les avis Google </span>  
                      <HiArrowRight className="font-semibold text-lg  inline " />
                 </button>
             </div>


             <div className="flex items-center gap-20   ">
                <div className=" w-80 h-full  space-y-14  bg-white shadow-xl shadow-jauneOr/15      p-5    flex flex-col justify-evenly   rounded-xl ">

                <p className=" max-md:text-base ">“Formation très complète et de grande qualité. Accompagnement personnalisé et adapté au parcours de chaque conseiller. Je recommande.”</p>

                <div className="space-y-3">

                  <div className=" flex  text-sm max-md:text-base">
                    <i className="fa-solid fa-star text-jauneOr"></i>
                    <i className="fa-solid fa-star text-jauneOr"></i>
                    <i className="fa-solid fa-star text-jauneOr"></i>
                    <i className="fa-solid fa-star text-jauneOr"></i>
                    <i className="fa-solid fa-star text-jauneOr"></i>
                  </div>


                  <div className="flex space-x-3">
                    <div className="size-10">
                        <img src="/e1.png" alt="" className="size-full object-cover object-center" />
                    </div>
                     <div>
                    <span className="block text-xs md:text-sm">Charles</span>
                    <span className="block text-xs md:text-sm">Élève de terminale</span>
                  </div>
                  </div>
                 

                </div>

              </div>
               <div className=" space-y-2  ">
                      <IoIosArrowDown className="border hover:bg-blue hover:text-white  transition-all hover:border-white text-3xl p-1 cursor-pointer rounded-full text-gray-400 border-gray-400 rotate-180" />
                      <IoIosArrowDown className="border bg-white/50 hover:bg-blue hover:text-white  transition-all hover:border-white text-3xl p-1 cursor-pointer rounded-full text-blue border-blue" />
                    </div>
             </div>
        </div>
      </section>



<section>
    <div className="h-[500px]   ">

    </div>
</section>
    </div>
  );
}















