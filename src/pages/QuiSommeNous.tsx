


// eslint-disable-next-line react-refresh/only-export-components
export default function () {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section - Transformé en Tailwind CSS */}
      <header
        className="relative w-full h-[480px] bg-cover bg-center bg-no-repeat mb-32"
        style={{ backgroundImage: "url('/Hero5.jpg')" }}
      >
        {/* Overlay - rgba(12, 11, 11, 0.38) */}
     
        {/* Hero Content */}
        <div className="absolute flex flex-col items-start space-y-4 left-[65px] top-1/2 transform -translate-y-1/2 ">
          {/* Hero Badge - Label qualité OPRA */}
          <h1 className=" w-11/12 h-[50px]  text-white font-['DM_Serif_Display']  text-4xl   ">
            Qui <span className="text-jauneOr">sommes nous ?</span>
          </h1>

          {/* Hero Description */}
          <p className="   text-white font-montserrat font-normal text-xl   ">
          Chez Prometheor, nous croyons que chacun mérite d’être accompagné avec exigence et <br />  bienveillance pour révéler son potentiel. <br />
          </p>
          <p className="w-11/12 font-montserrat text-white  font-normal text-xl leading-[30px]  "> Notre mission : préparer les jeunes aux grands défis scolaires et aux exigences du monde professionnel, grâce à un accompagnement sur mesure, animé par des experts passionnés.</p>
        </div>
      </header>

      {/* Section 1: Donner à chaque jeune les moyens */}
      <section className="">
        
          <div className="flex justify-center gap-20 flex-wrap  items-center">
            <div className="size-[500px] rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/eb5c5d44a1164ca3f39990b7a055b717305d82f8.jpg"
                alt="Jeunes construisant leur avenir"
                className="object-cover size-full rounded-lg"
              />
            </div>
            <div className=" border-black w-5/12 space-y-5">
              <h2 className="text-3xl text-blue font-dmserif w-10/12">
                Donner <span className="text-jauneOr" >à chaque jeune</span>  les moyens de construire <span className="text-jauneOr">son avenir avec confiance</span> 
              </h2>
              <p className="   ">
                Je suis Sonia Dridi, conseillère d'orientation scolaire indépendante et fondatrice de  Prometheor. <br /> Après 14 ans à accompagner des jeunes et leurs familles dans leurs choix d’orientation, j’ai constaté à quel point les parcours scolaires peuvent être vécus comme un labyrinthe : pression, doutes, méconnaissance des filières, injonctions contradictoires…
              </p>
              <p className="">
              J’ai fondé <span className="font-medium">Prometheor avec une équipe de personnes passionnées et profondément investies</span> sur les sujets de l’orientation, de la réussite scolaire et de l’accompagnement des jeunes.Nous partageons une même ambition : offrir un accompagnement structuré, humain et éclairant, à chaque étape du parcours scolaire, du collège jusqu’aux études supérieures.
              </p>
            </div>
          </div>
     
      </section>

      {/* Section 2: Une équipe de conseillers engagée */}
      <section className="">
       
          <div className="flex justify-center gap-16 items-center flex-wrap my-32">
            <div className="w-6/12 space-y-7 bg-jauneOr/5 p-10 rounded-lg">
              <h2 className="text-3xl text-blue font-dmserif">
                Une équipe de <span className="text-jauneOr">conseillers engagée</span> , partout en France
              </h2>
              <p className="">
              Aujourd’hui, je suis entourée d’une équipe de professionnelles de l’orientation, toutes  profondément investies dans leur mission. <br /> Issues de parcours variés (éducation, psychologie, formation, ressources humaines…),<br />  elles partagent une même conviction :
              </p>
              <p className="">
             ”L’orientation ne se résume pas à remplir des vœux Parcoursup, c’est un processus de construction de soi “
              </p>

              <p>
                Nos conseillères sont également sensibilisées aux situations de handicap, aux troubles des apprentissages et aux besoins spécifiques. Elles portent cette attention avec sérieux et engagement, dans une approche respectueuse des singularités de chaque jeune.
              </p>
            </div>
            <div className="size-[500px]">
              <img
                src="/qsm-2.png"
                alt="Équipe de conseillers"
                className="object-cover size-full "
              />
            </div>
          </div>
       
      </section>

      {/* Section 3: Une vision complète de l'accompagnement */}
      <section className="">
        
          <div className="flex  items-center justify-center gap-20 flex-wrap ">
            <div className=" w-[500px] h-[420px] rounded-lg flex items-center justify-center">
              <img
                src="/qsm-5.jpg"
                alt="Vision complète de l'accompagnement"
                className="object-cover size-full rounded-lg"
              />
            </div>
            <div className=" w-5/12   space-y-5">
              <h2 className="text-3xl font-dmserif">
                Une <span className="text-jauneOr" >vision complète </span> de l'accompagnement
              </h2>
              <p className="text-lg  mb-6">
                Nous avons développé une méthodologie structurée autour de nos <span className="font-medium text-blue">3P: Profil –Projet – Parcours</span> 
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i> 
                  
                    <p className="">Définir son Profil pour se connaître</p>
                  
                </div>
                <div className="flex items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i> 
                  <p className="">Trouver votre Projet <br /> Parce qu’il n’y a pas d’orientation réussie sans un projet concret.</p>          
                </div>
                <div className="flex items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i> 
                 <p className="">Déterminer un Plan d’action détaillé pour vous mener à votre projet.</p>
                
                </div>
              </div>
              <p className=" ">
              Nous pensons que bien s’orienter, c’est :
              </p>
           <div className="space-y-4">
          <div className="flex items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i> 
                 <p className="">Mieux se connaître</p>
                
            </div>

            <div className="flex items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i> 
                 <p className="">Mieux comprendre le monde qui nous entoure</p>
                
            </div>
            <div className="flex items-start space-x-2">
                  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2 w-5 h-5  mt-1 flex-shrink-0"></i> 
                 <p className="">Et mieux identifier les ressources et les opportunités </p>
                
            </div>
           </div>
           

            </div>
          </div>
      
      </section>

      {/* Section 4: Mais c'est aussi tenir compte du vécu scolaire */}
      <section className="">
        
          <div className="flex justify-center flex-wrap gap-20 items-center my-32">
            <div className="w-6/12 space-y-5 p-10 rounded-lg bg-jauneOr/5  ">
              <h2 className=" text-3xl font-dmserif text-blue mb-6">
                Mais c'est aussi tenir compte <span className="text-jauneOr">du vécu scolaire du jeune</span> ...
              </h2>
              <p className="text-lg  mb-6">
                ... de ses éventuelles fragilités ou difficultés, pour l’aider à se projeter avec réalisme et ambition. C’est pourquoi nous intégrons pleinement la dimension scolaire dans nos accompagnements, en lien avec les objectifs, les méthodes de travail, les résultats et le cadre personnel de chaque élève. 
              </p>
              <p className="">
                Notre approche se veut à la fois personnalisée, inclusive et bienveillante, avec des outils fiables, des repères clairs, et une véritable qualité d’écoute.
              </p>

              <p className="font-medium">Prometheor, c’est bien plus qu’un service d’orientation :</p>
            <p>C’est un partenaire de confiance, engagé pour que chaque jeune puisse trouver sa voie, à son rythme, dans le respect de ce qu’il est !</p>

            </div>
            
          

             <div className=" w-[500px] h-[420px] rounded-lg flex items-center justify-center">
              <img
                src="/qsm-3.png"
                alt="Vision complète de l'accompagnement"
                className="object-cover size-full rounded-lg"
              />
            </div>
          </div>
    
      </section>
    </div>
  );
}