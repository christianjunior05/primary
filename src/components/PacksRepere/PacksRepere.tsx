import { GoPlus } from "react-icons/go";
import Section2 from "./sectionComponents/Section2";
import Section5 from "./sectionComponents/Section5";
import { HiArrowRight } from "react-icons/hi2";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const PacksRepere = () => {
  return (
    <div>
      <header>
        <div className="bg-repere h-[400px] bg-cover bg-center flex items-center" id="repere">
          <div className="flex flex-col justify-center size-full backdrop-brightness-50">
            <div className=" px-6 md:px-20 space-y-4  text-white font-dmserif max-w-full max-md:w-4xl ">
              <p className="text-xl leading-5    sm:text-3xl md:text-3xl w-6/12 ">
                Des réponses claires et personnalisées pour guider
                <span className="text-jauneOr">
                  {" "}
                  l’orientation de votre enfant.
                </span>
              </p>
              <p className="text-base   sm:text-lg md:text-2xl leading-relaxed w-10/12">
                Un rendez-vous pensé pour lever les doutes, rassurer et apporter
                un premier éclairage sur ses choix de filière.
              </p>
              <p className="text-sm  sm:text-base md:text-xl leading-relaxed">
                Parce que chaque choix éclairé commence par une meilleure
                connaissance de soi.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className=" flex justify-center items-center gap-20 my-32 flex-wrap">
          {/* Image */}
          <div
            className="size-96  max-lg:w-60 max-lg:h-80 max-md:w-64 max-md:h-64 bg-cover bg-center rounded-[16px]"
            
          >
  <img src="/r1.png" alt="" className="size-full" />

          </div>

          {/* Texte */}
          <div className="py-10 w-1/2 max-lg:w-7/12 max-md:w-full space-y-4 p-5 rounded-lg bg-jauneOr/5 text-sm flex flex-col items-start justify-around">
            <p className="text-3xl max-lg:text-2xl max-md:text-xl font-dmserif text-blue">
              Vous êtes parents et vous vous posez des questions ...
            </p>
            <p className="text-base max-md:text-sm">
              ... sur le choix de filière de votre enfant ? Sur une éventuelle
              réorientation ? Le Pack Repère est conçu pour vous apporter un
              premier avis éclairé .
            </p>
            <p className="text-blue font-dmserif text-2xl max-lg:text-xl max-md:text-lg">
              À qui s’adresse <span className="text-jauneOr">ce pack ?</span>
            </p>

            <ul className="space-y-4 mb-3">
              <li className="flex space-x-2">
                <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />
                <p>
                  Collégiens : pour valider ses choix se section (générale&
                  technologique ou professionnelle).
                </p>
              </li>
              <li className="flex space-x-2">
                <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />
                <p>
                  Lycéens : confirmer ses spécialités et avoir des réponses à
                  vos questions
                </p>
              </li>

              <li className="flex space-x-2">
                <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />
                <p>
                  Étudiants : réfléchir à sa poursuite d'études ou changer de
                  filière
                </p>
              </li>
            </ul>

            <Link to="/conseillers" className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
              <span>Trouver un conseiller</span>

              <HiArrowRight className="font-semibold text-lg  inline " />
            </Link>
          </div>
        </div>
      </section>

      <Section2 />

<section>

      <div
        className={` bg-section3 bg-cover bg-center h-[600px] flex flex-col justify-center my-32`}
      >
        <div className=" space-y-5 ml-20 max-sm:mx-2 max-[1100px]:w-3/5 max-[740px]:w-4/5   w-6/12 shrink-0  p-6 rounded-xl bg-white/80">
          <h5 className="text-4xl  font-dmserif text-blue">
            À l'issue de la séance :
          </h5>

          <ul className="text-blue text-lg space-y-2">
            <li className="max-md:text-xs">
              <GoPlus className="text-jauneOr inline mr-1" /> Une vision plus
              structurée
            </li>
            <li className="max-md:text-xs">
              <GoPlus className="text-jauneOr inline mr-1" /> Des
              recommandations personnalisées
            </li>
            <li className="max-md:text-xs">
              <GoPlus className="text-jauneOr inline mr-1" /> Un plan d'actions
              et des repères pour avancer sereinement
            </li>
          </ul>

          <Link to="/conseillers" className=" inline-block  max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
            Contacter un conseiller{" "}
            <HiArrowRight className="font-semibold text-lg  inline " />
          </Link>
        </div>
      </div>
</section>



{/* Besoin de personnaliser
votre accompagnement ? */}

<section>
     <div className="ml-16 flex items-center justify-center gap-20  max-sm:space-x-0 my-20 ">

  <div className=" size-96  rounded-xl">
    <img src="/w16.png" alt="image" className="size-full object-cover rounded-xl "/>
  </div>
  <div className=" items-start w-5/12  space-y-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex flex-col ">
    <h2 className="text-blue font-lato font-dmserif  text-4xl max-md:text-center  "> Besoin de personnaliser <br /> <span className="text-jauneOr">votre accompagnement ?</span>   </h2>
       
 <p className="   " > Chaque enfant est unique, avec ses forces, ses aspirations et parfois des besoins particuliers.</p> 
 <p className="  " > Chez Prometheor, nous co-construisons un accompagnement  adapté :  Rendez-vous de cadrage, mise en place d'une solution adaptée avec un suivi évolutif.</p> 


   <Link to="/conseillers" className=" inline-block max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
           <span>Contacter un conseiller</span>   

              <HiArrowRight className="font-semibold text-lg  inline " />
            </Link>
  </div>
</div>
</section>

 

      {/* <Section4
        img1={false}
        img2={false}
        img3={false}
        commentaire1="Accompagnement très réussi auprès de mes fils. Sonia est une personne très qualifiée, à l'écoute de chaque élève avec des conseils très pertinents. Elle est également très disponible ! Je recommande vivement."
        commentaire2="Juliette Lacoste est un superbe professeur qui m’a énormément aidé lors de mon parcours scolaire et dans la vie active pour ma recherche d’emploi et dans mes projets personnels. Je la recommande à 100% !Elle est Géniale, elle est très pédagogue et très patiente !"
        commentaire3="Ma fille a été suivie par Virginie qui a analysé ses qualités et appétences personnelles et professionnelles. Nous avons eu un accès dédié sur une page web. Elle lui a ensuite prodigué les meilleurs conseils et propositions d'établissements. Prometheor est une solution que je recommande vivement aux parents et élèves en phase d'orientation."
        profession1="maman de Charles"
        profession2="classe de terminale"
        profession3="Élève de terminale"
        nom1="Laurence"
        nom2="Léa"
        nom3="Jules"
        dimenssion="size-80"
      /> */}

      {/* section 12 de la home page réutilisé */}
      <Section5
        Title="Prêt à avancer ?"
        text="Contactez un conseiller pour un premier échange téléphonique :"
        textbutton="Trouver un conseiller "
        image="bg-section5Repere"
      />
      <div className="     flex items-center justify-center gap-5  max-sm:space-x-0 my-20 ">
        <div className=" size-96  rounded-xl">
          <img
            src="/section6.jpg"
            alt="image"
            className="size-full object-cover rounded-xl "
          />
        </div>
        <div className="  w-6/12  space-y-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex flex-col ">
          <h2 className="text-blue font-lato font-dmserif    text-4xl max-md:text-center  ">
            Découvrez <span className="text-jauneOr"> nos autres packs </span>
          </h2>

          <div  className="flex items-center space-x-2  ">
            <Link to="/trajectoire" className=" inline-block max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
             <span>Pack trajectoire</span> 
              <HiArrowRight className="font-semibold text-lg  inline " />
            </Link>
            <Link to="/exploration" className=" inline-block max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
             <span>Pack exploration</span> 
              <HiArrowRight className="font-semibold text-lg  inline " />
            </Link>

              <Link to="/parcours" className=" inline-block max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
            <span> Pack parcoursup </span>   
              <HiArrowRight className="font-semibold text-lg  inline " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacksRepere;
