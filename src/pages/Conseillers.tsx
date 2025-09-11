import { HiArrowRight } from "react-icons/hi2";
import Button from "../components/Homepage/miniComponents/Button";
import { FiArrowLeft, FiArrowRight, FiPhone } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
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
                dédiés 
              </span>
            </h1>

          <div className="grid grid-cols-3 gap-24 px-36">

      <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className=" ">
          <img
            src="/c1.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center object-cover "
          />
        </div>

        <div className="p-2  h ">
          <span className=" text-xl text-blue">Gladys khady</span>

          <ul className="leading-8  ">
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
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Gwladys </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>

      <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className=" h-56 ">
          <img
            src="/c2.JPEG"
            alt=""
            className=" rounded-t-xl size-full object-top object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Sonia Dridi</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 62 82 32 01</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>sonia@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Ile de France, Hauts de Seine</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Sonia </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>


      <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c3.jpg"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Sarah Pelisson</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 50 99 49 56</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>sarah.pelisson@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Ile de France, Val de Marne</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Sarah</span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>

      <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c4.png"
            alt=""
            className=" rounded-t-xl size-full object-top  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Aminata Sacko</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 65 54 44 83</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>aminata.sacko@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Val de Marne</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Aminata </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>



       <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Virginie Colette</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 82 32 92 28</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>virginie.colette@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Yvelines</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Virginie </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>


      <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Fabyene Nimirf</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 22 63 27 63</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>fabyene.nimirf@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Yvelines</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Aminata </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>


        <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Juliette Lacoste</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 82 80 15 74</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>juliette.lacoste@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Yvelines</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Juliette </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>



        <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Myriam Diebold</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 84 84 54 07</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>myriam.diebold@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Auvergne Rhône Alpes</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Myriam </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>





        <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Nadia Royer</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 26 48 33 76</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>nadia.royer@gmail.com</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Auvergne-Rhône-Alpes</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Nadia </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>


        <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Laetitia Masini</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 06 63 22 34</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>laetitia.masini@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Auvergne-Rhône-Alpes</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Laeticia </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>




        <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Caroline Geraads</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 50 99 49 56</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>caroline.geraads@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Auvergne-Rhône-Alpes</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Caroline </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>

        

          <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Jessica afonso</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>07 83 05 74 38</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>jessica.afonso@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Auvergne-Rhône-Alpes</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Jessica </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>




        <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Laurie Allios</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>07 51 06 42 84</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>laurie.allios@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Occitanie</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Laurie </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>





        <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Brigitte Fressy</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>07 62 26 61 97</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>brigitte.fressy@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Occitanie</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Brigitte </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>



        <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Estelle Finck-Rolly</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 84 23 77 19</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>estelle.finck-rolly@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Grand Est</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Estelle </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>



        <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Laurence Rabier</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 21 68 59 45</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>laurence.rabier@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Nouvelle Aquitaine</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Laurence </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>






        <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Martine Lolom</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 30 40 01 07</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>martine.lolom@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Bretagne</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Martine </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>








        <div className="text-lg   rounded-lg  border h-[400px]   shadow-xl shadow-jauneOr/10 ">
        <div className="h-56 ">
          <img
            src="/c5.PNG"
            alt=""
            className=" rounded-t-xl size-full object-center  object-cover "
          />
        </div>

        <div className="p-2   ">
          <span className=" text-xl text-blue">Karine Toulouse</span>

          <ul className="leading-8  ">
            <li className="space-x-1">
          
              <FiPhone className="text-jauneOr inline mr-1 text-2xl" />
              <span>06 14 32 57 68</span>
            </li>
            <li className="space-x-1">
             
              <MdOutlineEmail className="text-jauneOr inline mr-1 text-2xl" />
              <span>karine.toulouse@prometheor.fr</span>
            </li>
            <li className="space-x-1">
          
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 text-2xl" />
              <span>Bourgogne-Franche-Comté</span>
            </li>
          </ul>
          <button className="text-jauneOr font-montserrat mt-2 space-x-1  ">
          
            <span>En savoir plus sur Karine </span>
            <HiArrowRight className="inline " />
          </button>
        </div>
      </div>


      
 
          </div>
          </div>
        </div>

    

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
