import { FaArrowRight } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";



const Concours = () => {
  return (
    <div className="min-h-screen">
    
      {/* Hero Section - Transformé en Tailwind CSS */}
      <header className="h-[400px] bg-trajectoireHeader gb-center bg-cover flex  items-center pl-10 bg-no-repeat ">
      <div className="space-y-3">
  <p className="text-4xl text-white font-dmserif">Préparez efficacement <span className="text-jauneOr " >vos concours et certifications post-bac</span> </p>
  <p className="text-xl text-white font-dmserif  " >Vous visez une école de commerce ou une école d’ingénieur après le bac ?</p>
  <p className="text-white  font-montserrat w-10/12 ">Vous souhaitez valoriser votre niveau en français ou en anglais avec une certification reconnue ?  <br/>  Nous vous proposons des stages de préparation ciblés, adaptés aux exigences des épreuves et aux profils des candidats.</p>
      </div>
      </header>

      {/* Section: Concours d'entrée en école de commerce */}
      <section className="py-16 bg-white">
        
          <div className=" flex gap-14 m-auto   items-center w-10/12 ">
            <div className="size-[25rem] rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/Image14.jpg"
                alt="Étudiants préparant concours commerce"
                className="object-cover size-full object-center rounded-lg"
              />
            </div>
            <div className=" space-y-5" >
              <h2 className="text-3xl font-dmserif text-blue font-lato ">
               Concours d'entrée  <span className="text-jauneOr "> en école de <br/> commerce post-bac</span>
              </h2>
              <p className="  ">
                Nos stages vous préparent aux épreuves écrites et orales des principaux concours :
                    
              </p>

              <p className="  w-full">
                <span className="text-jauneOr font-semibold ">Objectif :</span> s'entraîner sur les épreuves clés (logique, raisonnement, synthèse, anglais) 
               <br/> et développer une posture convaincante à l'oral.
                 </p>
              <ul className="space-y-3">
                <li className="flex   items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr "></i>
                  <span className="text-gray-600 text-sm font-medium ">
                    ACCES, SESAME
                  </span>
                </li>
                <li className="flex items-start space-x-2 ">
                   <i className="fa-solid fa-graduation-cap text-jauneOr "></i>

                  <span className="text-gray-600 text-sm font-medium ">
                    Oraux de motivation des Bachelors et BBA (parcours hors concours commun)
                  </span>
                </li>
              </ul>

                     <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                        En savoir plus
                    </button>
           
            </div>
          </div>
      
      </section>

      {/* Section: Concours d'entrée en école d'ingénieur */}
    

         <section className="py-16 bg-white">
        
          <div className=" flex gap-14 m-auto   items-center w-10/12 ">
           
            <div className=" space-y-5" >
              <h2 className="text-3xl font-dmserif text-jauneOr font-lato ">
               Concours d'entrée  <span className="text-blue "> en école<br/> d'ingénieur post-bac</span>
              </h2>
              <p className="  ">
                Nous accompagnons les élèves souhaitant intégrer une école via les concours suivants: 
                    
              </p>

                 <p className="  w-full">
                <span className="text-jauneOr font-semibold ">Objectif :</span> 
                 consolider les acquis scientifiques, optimiser la gestion du temps et réussir <br/> les entretiens de motivation.
              </p>
              <ul className="space-y-4">
                <li className="flex   items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr "></i>
                  <span className=" text-sm font-medium ">
                   Advance, Puissance Alpha, Avenir, GEIPI Polytech
                  </span>
                </li>
                <li className="flex items-start space-x-2 ">
                   <i className="fa-solid fa-graduation-cap text-jauneOr "></i>

                  <span className=" text-sm font-medium ">
                 Oraux des écoles hors concours commun, notamment les INSA, les UT (UTBM, UTC, UTT) <br/>  ou d’autres écoles sur dossier
                  </span>
                </li>
              </ul>

           
            </div>

             <div className="size-[25rem] rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/Image13.jpg"
                alt="Étudiants préparant concours commerce"
                className="object-cover size-full object-center rounded-lg"
              />
            </div>
          </div>
      
      </section>

      {/* Section: Préparations aux certifications */}
   

      <section className="py-16 bg-white">
        
          <div className=" flex gap-14 m-auto   items-center w-10/12 ">
           

          <div className="size-[25rem] rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/Image12.png"
                alt="Étudiants préparant une certification"
                className="object-cover size-full object-center rounded-lg"
              />
            </div>

            <div className=" space-y-5" >
              <h2 className="text-3xl font-dmserif text-blue font-lato ">
               Preparation   <span className="text-jauneOr ">aux certificat en <br /> langue et en expression </span>: pour <br /> tous les ages</h2>
              <p className="   ">
                Pour renforcer son dossier ou répondre aux attendus d’une formation, <br /> nous   proposons  des préparations aux:                    
              </p>

             <ul className="space-y-4">
                <li className="flex   items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr "></i>
                  <span className=" text-sm font-medium ">
                 Tests d’anglais (TOEIC®, IELTS®, CLOE)
                  </span>
                </li>
                <li className="flex items-start space-x-2 ">
                   <i className="fa-solid fa-graduation-cap text-jauneOr "></i>

                  <span className=" text-sm font-medium ">
              Certificat Voltaire (maîtrise de l’orthographe et de l’expression écrite)               
              </span>
                </li>
              </ul>
   
           
           <p>Nos formations combinent :</p>
              <ul className="space-y-4">
                <li className="flex   items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr "></i>
                  <span className="text-sm font-medium ">
                   Advance, Puissance Alpha, Avenir, GEIPI Polytech
                  </span>
                </li>
                <li className="flex items-start space-x-2 ">
                   <i className="fa-solid fa-graduation-cap text-jauneOr "></i>

                  <span className=" text-sm font-medium ">
                 Oraux des écoles hors concours commun, notamment les INSA, les UT (UTBM, UTC, UTT) <br/>  ou d’autres écoles sur dossier
                  </span>
                </li>
              </ul>

           <p>Pour découvrir les programmes détaillés et les prochaines dates :</p>


             <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                     Accéder aux stages de préparation  <FaArrowRight className="inline" />
                    </button>
            </div>

            
          </div>
      
      </section>

      {/* Section: Call to Action */}
    

      <section>
             <div className={`  max-sm:pl-5 bg-imageInteressez   pl-20 place-content-center  my-10 h-[400px] bg-no-repeat bg-cover `} >
                   <div className="  space-y-5 max-md:w-4/5  w-2/5   py-5 pl-10 bg-white/80 rounded-xl">
                   <h2 className=" max-sm:text-3xl font-dmserif text-4xl text-blue "> Interesser par nos stages</h2>
                   <p className="  font-lato  text-sm"> hoisissez dès maintenant l’une de nos conseillères pour définir ensemble la formule la plus adaptée. </p>
                             <button className=" text-white   max-sm:text-sm  bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                                Décourir nos formations <HiArrowRight className="font-semibold text-xl  inline "/>
                     </button>
        
                   </div>
          </div>
      </section>
    </div>
  );
};

export default Concours;