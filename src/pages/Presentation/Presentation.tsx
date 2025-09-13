import { FiPhone } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi2";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";


const Presentation= ()=> {
    return ( 

      <>
      
       <div >
       <div className="flex h-[400px]   justify-center items-center bg-jauneOr/25 gap-20">
        
<div className=" size-52" >
    <img src="/c15.JPG" alt="" className="size-full object-cover object-top  rounded-full " />
</div>
<div className="space-y-5">
    <h1 className="text-4xl font-dmserif text-blue">Estelle Finck Rolly</h1>
       <ul className="leading-8  space-y-1 text-xl">
                <li className="space-x-1">
              
                  <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
                  <span>07 51 06 42 84</span>
                </li>
                <li className="space-x-1">
                 
                  <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
                  <span>gwladys.kady@prometheor.fr</span>
                </li>
                <li className="space-x-1">
              
                  <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
                  <span>Ile de france, Centre-Val de Loire</span>
                </li>
       </ul>


        <div className="space-x-5">
                <button className=" space-x-2 max-lg:text-xs text-white text-sm     bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                   <span>Contacter Estelle</span> 
                      <HiArrowRight className="font-semibold text-lg  inline " />
                  
                  </button>

                  <button className=" space-x-2 max-lg:text-xs text-white text-sm     bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                  
                   <span> Réserver un appel découverte</span>
                   
                      <HiArrowRight className="font-semibold text-lg  inline " />
                  
                  </button>
        </div>
</div>

      </div>

      <div className="w-10/12 m-auto   space-y-5 my-20 ">
        <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>

        <div className="font-medium space-y-5 ">
            <p>Après 20 ans dans l’enseignement en tant que professeure des écoles, j’ai décidé en 2020 de quitter l’Education nationale pour <br />  m’ouvrir à d’autres horizons.</p>
           <p>A cette même période, je me suis réorientée dans la relecture et correction d’ouvrages mais très vite, je me suis rendu compte que le <br /> contact avec les enfants et les adolescents me manquait. </p>
           <p>J’ai donc créé mon entreprise de formation et j’ai accompagné des élèves de la seconde jusqu’au BAC+2 en les préparant à plusieurs <br /> types d’examen.</p>
           <p>Souvent en échangeant avec eux, mon expérience d’enseignante m’indiquait que la voie dans laquelle les jeunes s’engageaient n’était <br /> pas la bonne… Elle ne correspondait pas à leurs attentes, leur personnalité, leur manière d’être et de travailler, leurs particularités <br /> (HPI, dys…). </p>
          <p>         J’ai aussi retrouvé cette problématique en tant que maman lors de l’orientation de mon fils.   </p>
        <p>Pour pallier ce manque d’informations et afin de répondre aux besoins de ces jeunes et de leurs parents, j’ai décidé de me former au <br /> métier de conseillère d’orientation.</p>
     
     <p>   Ma valeur ajoutée: une connaissance approfondie du milieu scolaire et de l’Education nationale, la préparation à certains examens, la <br /> connaissance des méthodes d’apprentissage des élèves à profil particulier (dyslexiques, HPI…).</p>
        </div>
      </div>
      </div>

      </>
     );
}

export default Presentation ;