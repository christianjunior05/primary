import "../App.css";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animeIcon,setanimeIcon]=useState(false)
  const [animeIcon2,setanimeIcon2]=useState(false)
  const animeIconRef = useRef<HTMLSpanElement[]>([]);
  const ClickRef = useRef<HTMLUListElement[]>([]);
  const [color,setColor]=useState("accueil")
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (e?: React.MouseEvent<HTMLLIElement> ,color?:string) => {
  if (color) {
    setColor(color)
  }

    if (e) {
         const target = e.currentTarget.querySelectorAll(".menu"); 
    if (target && animeIconRef.current) {
      
      target.forEach((el) => {
        el.classList.toggle("active");
        setanimeIcon(!animeIcon)
      });

    
     
    }
    }
  };


  
  const handleClick2 = (e?: React.MouseEvent<HTMLLIElement> ,color?:string) => {
   if (color) {
    setColor(color)
   }

    if (e) {
          const target = e.currentTarget.querySelectorAll(".menu");

       if (target && animeIconRef.current) {
      
        target.forEach((el) => {
        el.classList.toggle("active");
        setanimeIcon2(!animeIcon2)
      });
     
    }
    }
   
  };

  return (
    <nav className=" bg-blue text-white font-lato w-full  z-50  fixed">
      <div className="flex justify-between items-baseline p-7 space-x-4">
        {/* Logo */}
        <div className="w-48 max-md:block max-lg:hidden">
          <img src="/logo.png" alt="Logo" className="w-full object-cover" />
        </div>

        {/* Liens Desktop */}
        <ul className=" max-md:hidden  flex space-x-6 items-center text-xs lg:text-base   whitespace-nowrap">
          <li 
            onClick={()=> handleClick(undefined,"accueil")}
            className=    {`${color === "accueil" ? "text-jauneOr":""}  transition-all cursor-pointer`}>
            <Link to="/"> Accueil</Link>
          </li>
          <li
            onClick={(e)=> handleClick(e,"offre")}
            className=  {`${color === "offre" ? "text-jauneOr":""}  hover:text-jauneOr transition-all  cursor-pointer `}>
          <p > Nos offres d'orientation <span ref={(el)=>{ animeIconRef.current[0] =el!} }><IoIosArrowDown  className= {`${animeIcon && 'rotate-180 transition-all'} inline transition-all `}/>  </span> </p>  
            <ul
              ref={(el) => {
                ClickRef.current[0] = el!;
              }}
              className=" menu   absolute z-20 text-white   leading-10 bg-blue w-44  rounded-md  "
            >
              <li
             
              className="   cursor-pointer pl-2    bg-blue hover:text-jauneOr transition-all  ">
                <Link to="/repere">Repère </Link>
              </li>

              <li
             
              className="  cursor-pointer pl-2    bg-blue hover:text-jauneOr transition-all  ">
                <Link to="/exploration">Exploration</Link>
              </li>

              <li className="   cursor-pointer pl-2    bg-blue hover:text-jauneOr transition-all   ">
                <Link to="/trajectoire">Trajectoire </Link>
              </li>

              <li className="  cursor-pointer pl-2      rounded-b-md   bg-blue hover:text-jauneOr transition-all  ">
                <Link to="/parcours">Parcoursup</Link>
              </li>
            </ul>
          </li>
          <li
          
            // onClick={(e)=>handleClick(e.target)}
            onClick={()=> handleClick(undefined,"stage")}
           
            className= {`${color === "stage" ? "text-jauneOr":""} hover:text-jauneOr transition-all   space-y-5  cursor-pointer `} >
            <Link to="/concours"> Nos stages</Link>
          </li>
          <li 
            onClick={()=> handleClick(undefined,"conseillers")}
          
          className={`${color === "conseillers" ? "text-jauneOr":""} hover:text-jauneOr transition-all cursor-pointer `} >
            <Link to="/conseillers"> Nos conseillers</Link>
          </li>
          <li
            onClick={(e)=>handleClick2(e,"qui")}
            className={`${color === "qui" ? "text-jauneOr":""} hover:text-jauneOr transition-all cursor-pointer`}  
          >
                      <p > 
            Qui sommes-nous <span ref={ (el)=>{animeIconRef.current[1] =el!} }><IoIosArrowDown  className= {`${animeIcon2 && 'rotate-180 transition-all'} inline transition-all `}/>  </span> </p>  

            <ul
              ref={(el) => {
                ClickRef.current[1] = el!;
              }}
              className="absolute menu ChildMenu text-white    bg-blue   rounded-md "
            >
              <li className="cursor-pointer hover:text-jauneOr p-2 rounded-md transition-all bg-blue ">
                <Link to="/QuiSommesNous">Notre équipe</Link>
              </li>

              <li className="  cursor-pointer hover:text-jauneOr p-2 rounded-md transition-all bg-blue ">
                <Link to="/notreengagement">Notre engagement</Link>
              </li>

              <li className="  cursor-pointer hover:text-jauneOr p-2 rounded-md transition-all bg-blue ">
                <Link to="/devenirconseiller">Devenir conseillers</Link>
              </li>

              <li className="  cursor-pointer hover:text-jauneOr p-2 rounded-md transition-all bg-blue ">
                <Link to="/collaborateur">Nos collaborateurs</Link>
              </li>
            </ul>
          </li>
            <li 
            
             onClick={()=>handleClick2(undefined,"blog")}
            className={`${color === "blog" ? "text-jauneOr":""} hover:text-jauneOr transition-all cursor-pointer`}
            >
          <Link to="/Blog">Blog</Link>  
          </li>
          <li
          
          onClick={()=>handleClick2(undefined,"contacter")}
            className={`${color === "contacter" ? "text-jauneOr":""} hover:text-jauneOr transition-all cursor-pointer`}>
         <Link to="/contact">Nous contacter</Link>   
          </li>
        
          <li
          
          
                onClick={()=>handleClick2(undefined,"connexion")}
            className={`${color === "connexion" ? "text-jauneOr":""} hover:text-jauneOr transition-all cursor-pointer flex items-center space-x-2 `}>

            <HiOutlineLockClosed />
            <span><Link to="https://app.prometheor.fr/">Connexion</Link></span>
          </li>
        </ul>

        {/* Bouton Burger Mobile */}
        <button
          className="text-3xl md:hidden hover:text-jauneOr"
          onClick={toggleMenu}
        >
          <CiMenuBurger />
        </button>
      </div>

      {/* Menu Mobile (slide depuis la droite) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue text-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <span className="text-lg font-bold">Menu</span>
          <IoMdClose
            className="text-2xl cursor-pointer hover:text-jauneOr"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col space-y-4 p-6">
          <li onClick={toggleMenu}>
            <Link to="/">Accueil</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/repere">Offres d'orientation</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/exploration">Stages</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/trajectoire">Conseillers</Link>
          </li>
          <li onClick={toggleMenu}>Qui sommes-nous</li>
          <li onClick={toggleMenu}>Nous contacter</li>
          <li onClick={toggleMenu}> <Link to="/parcours">Blog</Link> </li>
          <li
            className="flex items-center space-x-2 text-jauneOr"
            onClick={toggleMenu}
          >
            <HiOutlineLockClosed />
            <span>Connexion</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
