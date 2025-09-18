import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

// concerne la section " Rencontrez nos conseillers "
//DIV du block droit

const InfoProfile = () => {
  return (
   <div className=" flex items-center gap-5   ">
      <div className="text-lg shadow  rounded-lg shadow-jauneOr/15 h-full   ">
        <div className=" ">
          <img
            src="/w15.png"
            alt=""
            className=" rounded-t-xl size-full object-cover "
          />
        </div>

        <div className="p-2 blur-sm">
          <span className="font-lato text-xl text-blue">Caroline.P</span>

          <ul className="leading-8  ">
            <li>
           
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />{" "}
              <span>06 30 40 01 07 </span>
            </li>
            <li>
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />{" "}
              <span>virginie.colette@prometheor.fr</span>
            </li>
            <li>
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />{" "}
              <span>Yvelines</span>
            </li>
          </ul>
          <button className="text-jauneOr  ">
            <span>En savoir plus virginie </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>

     
    </div> 
  );
};

export default InfoProfile;
