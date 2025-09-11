import { FaGraduationCap } from "react-icons/fa";


// eslint-disable-next-line react-refresh/only-export-components
export default function () {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section - Transformé en Tailwind CSS */}
      <header
        className="relative w-full h-[480px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Hero5.jpg')" }}
      >
        {/* Overlay - rgba(12, 11, 11, 0.38) */}
        <div className="absolute inset-0" style={{ background: "rgba(12, 11, 11, 0.38)" }}></div>
        
        {/* Hero Content */}
        <div className="absolute flex flex-col items-start space-y-4 left-[65px] top-1/2 transform -translate-y-1/2 ">
          {/* Hero Badge - Label qualité OPRA */}
          <h1 className=" w-[1184px] h-[50px]  text-white font-['DM_Serif_Display']  text-4xl   ">
            Qui <span className="text-jauneOr">sommes nous ?</span>
          </h1>

          {/* Hero Description */}
          <p className="w-[1184px]   text-white font-montserrat font-normal text-xl   ">
          Chez Prometheor, nous croyons que chacun mérite d’être accompagné avec exigence et <br />  bienveillance pour révéler son potentiel. <br />
          </p>
          <p className="w-[1184px] font-montserrat text-white  font-normal text-xl leading-[30px]  "> Notre mission : préparer les jeunes aux grands défis scolaires et aux exigences du monde professionnel, grâce à un accompagnement sur mesure, animé par des experts passionnés.</p>
        </div>
      </header>

      {/* Section 1: Donner à chaque jeune les moyens */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/eb5c5d44a1164ca3f39990b7a055b717305d82f8.jpg"
                alt="Jeunes construisant leur avenir"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl text-blue font-dmserif mb-6">
                Donner <span className="text-jauneOr" >à chaque jeune</span>  les moyens de construire <span className="text-jauneOr">son avenir avec confiance</span> 
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Je suis Sonia Dridi, conseillère d'orientation scolaire indépendante et fondatrice de  Prometheor. <br /> Après 14 ans à accompagner des jeunes et leurs familles dans leurs choix d’orientation, j’ai constaté à quel point les parcours scolaires peuvent être vécus comme un labyrinthe : pression, doutes, méconnaissance des filières, injonctions contradictoires…
              </p>
              <p className="text-gray-600">
              J’ai fondé Prometheor avec une équipe de personnes passionnées et profondément investies sur les sujets de l’orientation, de la réussite scolaire et de l’accompagnement des jeunes.Nous partageons une même ambition : offrir un accompagnement structuré, humain et éclairant, à chaque étape du parcours scolaire, du collège jusqu’aux études supérieures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Une équipe de conseillers engagée */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Une équipe de conseillers engagée, partout en France
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Notre réseau de conseillères en orientation couvre l'ensemble du territoire français, 
                garantissant un accompagnement de proximité pour chaque famille.
              </p>
              <p className="text-gray-600">
                Chaque conseillère partage notre vision d'une orientation bienveillante et personnalisée, 
                adaptée aux besoins spécifiques de chaque jeune.
              </p>
            </div>
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/qsm-2.png"
                alt="Équipe de conseillers"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Une vision complète de l'accompagnement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/qsm-5.jpg"
                alt="Vision complète de l'accompagnement"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Une vision complète de l'accompagnement
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nous avons développé une méthodologie structurée autour de nos "3 P" :
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Profil</h3>
                    <p className="text-gray-600">Analyse approfondie des aptitudes et de la personnalité</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Projet</h3>
                    <p className="text-gray-600">Définition d'objectifs personnalisés et réalistes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGraduationCap className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Parcours</h3>
                    <p className="text-gray-600">Construction d'un cheminement adapté et progressif</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Une bonne orientation, c'est celle qui prend en compte l'ensemble de ces dimensions 
                pour proposer des solutions cohérentes et épanouissantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Mais c'est aussi tenir compte du vécu scolaire */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Mais c'est aussi tenir compte du vécu scolaire du jeune...
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Chaque parcours scolaire est unique et mérite d'être valorisé. 
                Nous prenons en compte l'ensemble de l'expérience de l'élève pour 
                construire un projet d'orientation authentique et motivant.
              </p>
              <p className="text-gray-600">
                Notre approche personnalisée s'adapte aux spécificités de chaque jeune, 
                en considérant ses réussites, ses difficultés et ses aspirations pour 
                proposer des solutions sur mesure.
              </p>
            </div>
            <div className="h-96 rounded-lg flex items-center justify-center">
              <img
                src="/qsm-3.png"
                alt="Vécu scolaire du jeune"
                className="object-cover w-3/4 h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}