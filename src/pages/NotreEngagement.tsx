import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const NotreEgagement = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Transformé en Tailwind CSS */}
      <header
        className="relative w-full h-[480px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/w7.jpg')" }}
      >
        {/* Overlay - rgba(12, 11, 11, 0.38) */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(12, 11, 11, 0.38)" }}
        ></div>

        {/* Hero Content */}
        <div className="absolute  flex flex-col items-start gap-3 left-[65px] top-1/2 transform -translate-y-1/2 w-[1184px] h-[247px]">
          {/* Hero Badge - Label qualité OPRA */}
          <div className="text-3xl font-dmserif text-white w-9/12 ">
            Au travers de notre Label qualité OPRA – Orientation Personnalisé,
            Responsable & Accompagnée,
          </div>

          {/* Hero Title */}
          <div className=" text-xl font-medium text-white ">
            Nous nous engageons à vos côtés pour Une Orientation Scolaire
            d'Excellence
          </div>

          {/* Hero Description */}
          <div className="w-9/12 text-white font-medium">
            Chez Prometheor, nous accompagnons les jeunes et leurs familles dans
            une étape clé : l'orientation scolaire. Grâce à un réseau de
            conseillères indépendantes, nous proposons un suivi personnalisé,
            expert et bienveillant, fondé sur des valeurs fortes et un
            engagement d'excellence.
          </div>
        </div>
      </header>

      {/* Section: Des conseillères qualifiées et expertes */}
      <section className="">
        <div className="flex justify-center items-center gap-10 my-20">
          <div className="size-[500px] rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src="/w18.png"
              alt="Conseillère souriante"
              className="object-cover size-full rounded-lg"
            />
          </div>
          <div className="w-6/12">
            <h2 className="text-4xl space-x-2 font-dmserif  mb-4 text-blue ">
            <span> Des conseillères</span> 
              <span className=" text-jauneOr ">qualifiées et expertes</span>
            </h2>
            <p className="text-lg  mb-4">
              Les conseillères en orientation suivent une formation rigoureuse
              et approfondie avant d'intégrer le réseau.
            </p>
            <h3 className=" mb-4">Ce programme comprend :</h3>
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
      </section>

      {/* Section: Un accompagnement 100% personnalisé */}
      <section className=" ">
        <div className="flex justify-center gap-10  items-center">
          <div className="bg-jauneOr/5 p-5 rounded-lg w-6/12 ">
            <h2 className="text-3xl  space-x-2 text-blue font-dmserif mb-6">
            <span>Un accompagnement</span>  
              <span className="text-jauneOr">100% personnalisé</span>
            </h2>
            <p className="text-lg  mb-6">
              Chaque élève est unique, et son projet d'avenir doit l'être aussi.
              Nous avons conçu une approche individualisée qui prend en compte :
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
                  Ses résultats académiques et son environnement familial, pour
                  formuler des recommandations réalistes et ambitieuses
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
              className="object-cover size-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Section: Une méthodologie éprouvée et innovante */}
      <section className="">
        <div className="flex justify-center gap-10 items-center  my-20">
          <div className="size-[500px] rounded-lg flex items-center justify-center">
            <img
              src="/w2.jpg"
              alt="Conseillère souriante"
              className="object-cover size-full  rounded-lg"
            />
          </div>
          <div className="w-6/12">
            <h2 className="text-4xl space-x-2 text-blue font-dmserif mb-6">
            <span>Une méthodologie</span>  
              <span className="text-jauneOr">éprouvée et innovante</span>
            </h2>
            <p className="text-lg mb-6">
              Les conseillères utilisent une méthode basée sur des référentiels
              reconnus, combinant :
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Des outils psychométriques validés scientifiquement pour mieux
                  cerner le profil de l'élève
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Des exercices de connaissance de soi qui complètent les tests
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Des entretiens approfondis pour favoriser l'échange et la
                  réflexion sur les choix d'orientation
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Une veille active sur les nouvelles formations, les métiers
                  émergents et les réformes éducatives
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Une plateforme digitale pour faciliter l'accès aux
                  informations et centraliser les recommandations
                </p>
              </div>
            </div>
            <p className=" mt-6">
              Nous allions ainsi l'humain et la technologie pour offrir une
              expérience fluide et efficace aux familles.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Un cadre éthique et bienveillant */}
      <section className="">
        <div className="flex justify-center gap-10 items-center">
          <div className="w-6/12">
            <h2 className="text-4xl space-x-2 font-dmserif mb-6 text-blue">
            <span>Un cadre</span>  
              <span className="text-jauneOr">éthique et bienveillant</span>
            </h2>
            <p className="text-lg  mb-6">
              L'orientation est un processus sensible qui peut générer du stress
              et des doutes chez les jeunes et leurs parents. Les conseillères
              s'engagent à accompagner chaque élève avec bienveillance, écoute
              et respect, sans jugement ni pression.
            </p>
            <h3 className="mb-4">Nous garantissons :</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Une neutralité absolue dans nos recommandations : aucun
                  partenariat avec des écoles privées ou institutions
                  spécifiques.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Une confidentialité totale des échanges et des données
                  personnelles.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Un respect des choix de l'élève et de sa famille, en leur
                  laissant toujours le dernier mot.
                </p>
              </div>
            </div>
            <p className=" mt-6">
              Notre mission est d'aider chaque jeune à trouver sa voie, en toute
              sérénité.
            </p>
          </div>
          <div className="size-[500px] rounded-lg flex items-center justify-center">
            <img
              src="/85b777e62dcfdbbb49faf0a2366fce480e7ab670.jpg"
              alt="Conseillère souriante"
              className="object-cover size-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Section: Une amélioration continue de nos services */}
      <section className="">
        <div className="flex justify-center gap-10 items-center my-20">
          <div className="size-[500px] rounded-lg flex items-center justify-center">
            <img
              src="/ea4ff2f81b7123f87c8416129d0a10005552bd4c.jpg"
              alt="Conseillère souriante"
              className="object-cover size-full rounded-lg"
            />
          </div>
          <div className="w-6/12">
            <h2 className="text-4xl space-x-2 text-blue font-dmserif mb-6">
            <span>Une</span>   <span className="text-jauneOr">amélioration continue</span>
              <span> de  nos services</span>
            </h2>
            <p className="text-lg  mb-6">
              Chez Prometheor, la qualité de l'accompagnement est une priorité.
              Nous nous engageons dans une démarche d'amélioration continue, à
              travers :
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Des enquêtes de satisfaction régulières auprès des familles et
                  des élèves
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Des échanges réguliers de bonnes pratiques entre les
                  conseillères
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Une actualisation constante de nos outils et méthodologies
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i>
                <p className="">
                  Un engagement à rester à la pointe des évolutions éducatives
                  et professionnelles
                </p>
              </div>
            </div>
            <p className=" mt-6">
              Nous croyons que l'orientation scolaire ne doit pas être un simple
              choix ponctuel, mais un processus dynamique, pensé pour s'adapter
              à l'évolution du jeune et aux opportunités de demain.
            </p>
            <p className=" mt-4">
              En choisissant Prometheor, vous faites le choix d'un
              accompagnement fiable, humain et engagé. Parce que chaque avenir
              mérite une attention particulière, nous mettons tout en œuvre pour
              guider les jeunes vers des choix épanouissants et porteurs de
              succès !
            </p>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center gap-5  max-sm:space-x-0 my-20 ">

        <div className=" size-96  rounded-xl">
          <img
            src="/section6.jpg"
            alt="image"
            className="size-full object-cover rounded-xl "
          />
        </div>
      <div className="w-6/12  space-y-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex flex-col ">
        <h2 className="text-blue font-lato font-dmserif text-4xl max-md:text-center  ">
          Vous <span className="text-jauneOr"> pouvez aussi </span> :
        </h2>

        <div className=" items-center space-x-6 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-x-0 max-sm:space-y-6 flex-wrap space-y-3  ">
          <Link
            to="/QuiSommesNous"
            className=" inline-block max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      "
          >
            <span>Découvrir notre équipe</span>
            <HiArrowRight className="font-semibold text-lg  inline " />
          </Link>
          <Link
            to="/devenirconseiller"
            className=" inline-block max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      "
          >
            <span>Devenir conseillers</span>
            <HiArrowRight className="font-semibold text-lg  inline" />
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NotreEgagement;