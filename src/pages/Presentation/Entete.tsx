import { FiPhone } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi2";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

const Entete= ()=> {
    return ( 

      <>
      
      <div>
        
<div>
    <img src="/c15.JPG" alt="" />
</div>
<div>
    <h1>Estelle Finck Rolly</h1>
       <ul className="leading-8  space-y-1 ">
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


              <div>
                <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                    Contacter Estelle
                      <HiArrowRight className="font-semibold text-lg  inline " />
                  
                  </button>

                  <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                    Réserver un appel découverte
                      <HiArrowRight className="font-semibold text-lg  inline " />
                  
                  </button>
              </div>
</div>

      </div>

      </>
     );
}

export default Entete ;