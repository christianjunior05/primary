import type { ReactNode } from "react";
import { IoCheckmark } from "react-icons/io5";

type User = {
  id: number;
  image1: string;
  image2: string;
  nom: string;
  prenom: string;
  number: string;
  email: string;
  localisation: string;
  content: ReactNode; 
  classNameImage1?: string;
};



const Users:User[]  = [
  {
    id: 1,
    image1: "c1.png",
    image2: "e1.png",
    nom: " khady",
    prenom: "Gladys",
    number: "07 51 06 42 84",
    email: "gwladys.kady@prometheor.fr",
    localisation: "Ile de france, Centre-Val de Loire",
    classNameImage1:"w-full h-full rounded-t-xl object-cover object-center",
    content: ( <div className=" space-y-10 ">
              <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>
       
       <div className="space-y-5">
      <p>Après 20 ans d'expérience à la SNCF, où j’ai évolué du poste d’agent commercial à celui de responsable de la gestion administrative et  des alternances, j’ai fait le choix en 2023 de me reconvertir en tant que conseillère en insertion professionnelle et coach certifiée, avec une spécialisation en orientation scolaire</p>
       <p>Je porte un intérêt particulier à des thématiques essentielles telles que la gestion du stress, les émotions des jeunes, la parentalité, ainsi  que les différents modes d’apprentissage.</p>
       <p>Maman en situation de handicap et mère de quatre enfants, dont certains sont également concernés par le handicap, cette vocation  m’anime depuis plus de 21 ans.</p>
       <p>Je suis convaincue du potentiel unique de chaque individu et considère la diversité et l’ouverture comme de véritables forces.
        Inspirée par les mots du pédopsychiatre Michel Rufo – “Les enfants sont maîtres de leur destin avec l’appui des parents” –, je crois profondément au rôle clé des parents dans l’accompagnement des jeunes vers leur réussite</p>
       <p>Grâce à ma connaissance approfondie du monde professionnel et à une veille stratégique constante, notamment dans le domaine du recrutement, j’accompagne les jeunes et leur famille pour les aider à construire un avenir en adéquation avec leurs talents et leurs aspirations.</p>   
       </div>
     
       </div> ),
  },

     
   {
    id: 2,
     image1: "c2.png",
     image2: "e2.png",
     nom: "Sonia ",
     prenom: "Dridri",
     number: "06 62 82 32 01",
     email: "sonia@prometheor.fr",
     localisation: "Ile de France, Hauts de Seine",
      classNameImage1:"w-full h-full rounded-t-xl object-cover ",

      content: ( <div className=" space-y-10 ">
              <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>
      
       <div className="space-y-5">
          <p>Après une formation universitaire, j’ai travaillé pour les groupes Saint-Gobain et Suez dans les domaines de la logistique et de la qualité. </p>
       <p>Après 10 ans en tant que salariée, j’ai décidé de revenir à ce qui m’animait depuis toujours : l’accompagnement et le développement des jeunes. </p>
      
       <p>C’est ainsi qu’en 2010 j’ouvre mon agence de soutien scolaire à Versailles et deux ans plus tard je propose en complément un service d’accompagnement en orientation scolaire destiné aux collégiens, lycéens et aux étudiants.</p>
      
       <p>Avec mon équipe d’enseignants, j’ai suivi pendant plus de 14 ans des élèves en soutien scolaire, méthodologie et orientation, en France et à l’étranger.</p>
       <p>Pour comprendre et répondre aux besoins de chacun, je me forme régulièrement sur différentes thématiques comme celles liées aux troubles des apprentissages, aux mécanismes de la motivation ou à l’accompagnement des enfants HPI.</p>
        <p>Chaque année, j’accompagne une centaine de familles, en présentiel et en visioconférence, dans la réussite de leurs projets scolaires et leur orientation.</p>
      

       </div>
     
       </div> ),
    },

   {
     id: 3,
     image1: "c3.png",
    classNameImage1:"w-full h-full rounded-t-xl object-cover object-top",

     image2: "e3.png",
     nom: "Sarah ",
     prenom: "Pelisson",
     number: "06 50 99 49 56",
     email: "sarah.pelisson@prometheor.fr",
     localisation: "Ile de France, Val de Marne",
    content: ( <div className=" space-y-10 ">
              <h1 className="font-dmserif text-3xl text-blue">Qui je suis ?</h1>
              <div className="space-y-5">
          <p>En 2022, j’ai choisi de donner une nouvelle dynamique à ma carrière en devenant Coach professionnelle certifiée, spécialisée dans l’accompagnement des transitions professionnelles et dans l’orientation des jeunes.</p>
       <p>Ce choix s’inscrit dans la continuité de mon parcours. Psychologue du travail de formation, j’ai évolué pendant près de 20 ans dans le domaine des Ressources Humaines et du recrutement. Ces années m’ont permis d’apprendre à identifier les forces et les talents, à révéler les potentiels et à accompagner les évolutions de carrière. </p>
      
<p>Parallèlement, j’ai toujours eu à cœur d’accompagner les jeunes, que ce soit dans le cadre de missions bénévoles ou, plus personnellement, en traversant moi-même au quotidien les questions d’orientation avec mes deux ados. Ces expériences m’ont amenée à une évidence : c’est auprès des jeunes que je souhaite mettre mon énergie et mon expertise.</p>      
     
     <p>Tout cela a nourri une conviction forte : mieux se connaître est la clé pour bien s’orienter. Et c’est précisément là que je trouve tout le sens de mon métier et que je me sens utile.</p>
      
      
      <h2 className="font-dmserif text-3xl text-blue">Ma mission</h2>

<div className="space-y-5">
  <p>Concrètement, j’accompagne les 15-25 ans :</p>
  <ul className="space-y-5">
    <li className=" space-x-2 flex">
      <IoCheckmark className="text-jauneOr inline mr-1 mt-1 shrink-0 text-xl " />
      <span>En individuel : bilans d’orientation, accompagnement Parcoursup, préparation <br /> aux entretiens de motivation</span>
    </li>

    <li className=" space-x-2 flex">
      <IoCheckmark className="text-jauneOr inline mr-1 mt-1 shrink-0 text-xl " />
     <span>En collectif : ateliers de connaissance de soi, accompagnement à l’entrée sur le marché du travail <br /> (CV, lettre de motivation, simulation d’entretiens)</span>
    </li>
  </ul>

  <p>Optimiste, à l’écoute et pragmatique, j’accompagne les jeunes dans leur orientation avec une approche tournée vers l’action.</p>
  
</div>
              </div>
     
       </div> ),

   },

   {
     id: 4,
     image1: "c20.png",
         classNameImage1:"w-full h-full rounded-t-xl object-cover object-center",

     image2: "e20.png",
     nom: "Duguet   ",
     prenom: "Karine",
     number: "06 72 02 41 52",
     email: "karine.duguet@prometheor.fr",
     localisation: "Ile de France, Paris",
      content: ( <div className=" space-y-10 ">
              <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>
      
       <div className="space-y-5">
<p>Après un parcours universitaire en LEA et une école de Commerce, j’ai intégré une société américaine de biens de grande consommation (P&G : Ariel, Pampers, Tampax, Mr Propre, etc…) dans laquelle j’ai évolué pendant 12 ans dans le domaine des études de marché. Depuis 2008, je suis à mon compte en tant que Consultante d’études marketing qualitatives avec cette même mission d’étudier les comportements des consommateurs et à tester de nouveaux produits ou services.</p>

<p>L’observation, l’écoute, l’analyse et des recommandations concrètes sont les qualités nécessaires à ce métier et attendues par mes clients… cette démarche, j’ai décidé de la mettre également au service de l’orientation scolaire.</p>       


<p>Depuis 6 ans maintenant, j’ai endossé une double casquette : études qualitatives et orientation scolaire. L’orientation scolaire me permet de m’appuyer sur mes compétences professionnelles et d’accompagner un public qui me tient à cœur : les adolescents. Mon objectif est d’aider chaque jeune à trouver sa voie,à planter des graines pour faire grandir et évoluer leur réflexion…tout en rassurant les parents. Ma démarche d’accompagnement se veut bienveillante et pragmatique.</p>      
      
      
<p>Ma valeur ajoutée ? Avec mon métier de conseil en études qualitatives, j’ai une connaissance et un contact avec le marché du travail et une vision de différents métiers.</p>

  <p>Chaque année, j'accompagne une cinquantaine de familles, en présentiel et en visioconférence, dans la réussite de leur orientation.</p>

       </div>
     
       </div> ),
   },

   {
     id: 5,
     image1: "5.png",
         classNameImage1:"w-full h-full rounded-t-xl object-cover ",

     image2: "e5.png",
     nom: "Virgine ",
     prenom: "Colette",
     number: "06 82 32 92 28",
     email: "virginie.colette@prometheor.fr",
     localisation: "Yvelines",
     content: ( <div className=" space-y-10 ">
              <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>
      
       <div className="space-y-5">
<p>Soucieuse d’exercer une mission essentielle dans la société, je me suis tournée, après des études de droit, vers l’enseignement afin d’aider chaque enfant à valoriser ses compétences.</p>
<p>Après plusieurs années d’exercice, j’ai souhaité me consacrer à l’accompagnement des élèves en situation de handicap afin de comprendre et de répondre aux besoins de chacun. Cette expérience m’a appris à m’adapter à la personnalité, à la sensibilité, aux difficultés et aux envies des jeunes.</p>

<p>J’ai donc décidé de me spécialiser dans ce qui m’animait depuis toujours : l’accompagnement et le développement de chaque jeune dans le but qu’il trouve la voie correspondant à son profil singulier.</p>      
      
<p>Par mon approche pédagogique basée sur l’écoute et l’analyse de sa personnalité, je permets aux jeunes de reprendre confiance et d’aborder son orientation en toute sérénité.</p>

<p>Mon rôle de conseillère est de le guider étape par étape dans le processus d’orientation et de lui permettre de faire les bons choix en adéquation avec sa personnalité et son profil scolaire</p>
       </div>
     
       </div> ),
   },

   {
     id: 6,
     image1: "c6.png",
    classNameImage1:"w-full h-full rounded-t-xl object-cover ",
     image2: "e6.png",
     nom: "Fabyene",
     prenom: "Nimirf",
     number: "06 22 63 27 63",
     email: "fabyene.nimirf@prometheor.fr",
     localisation: "Yvelines",
         content: ( <div className=" space-y-10 ">
              <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>
      
       <div className="space-y-5">
<p>Je suis Fabyene, sophrologue et conseillère en insertion professionnelle.</p>


<p>
Depuis plus de 10 ans, j’accompagne les jeunes dans leur orientation, leur confiance en eux, et leurs choix d’avenir.
Mon approche est globale : au-delà du parcours scolaire, je prends en compte leur personnalité, leurs doutes, leurs besoins et leur rythme.</p>


<p>Je travaille aussi bien avec des collégiens qu’avec des lycéens ou de jeunes adultes en réorientation.</p>      

<p>Grâce à des outils issus de la sophrologie et du coaching, je les aide à mieux gérer leurs émotions, à se concentrer sur ce qui compte pour eux, et à s’affirmer dans leurs choix.</p>

<p>Chaque jeune mérite un espace où il peut s’exprimer, se questionner, et avancer sereinement. C’est ce que je propose à travers mes accompagnements.</p>

       </div>
     
       </div> ),
   },

   {
     id: 7,
     image1: "c7.jpg",
    classNameImage1:"w-full h-full rounded-t-xl object-cover object-center",

     image2: "e7.png",
     nom: "Juliette",
     prenom: "Lacoste",
     number: "06 82 80 15 74",
     email: "juliette.lacoste@prometheor.fr",
     localisation: "Yvelines",
  content: ( <div className=" space-y-10 ">
              <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>
      
       <div className="space-y-5">
<p>Je suis conseillère d’orientation et formatrice professionnelle bilingue (anglais/français). Depuis plus de 10 ans, j'accompagne jeunes et moins jeunes dans la construction de leur projet professionnel. </p>

<p>Mon bilinguisme s’appuie sur mes études et expériences à l’international, notamment au Royaume-Uni, au Canada et en Europe, où j’ai développé mes compétences en linguistique, informatique et management.</p>

<p>Après des études en linguistique informatique à la Sorbonne et un séjour d’échanges à l’Université Concordia à Montréal, j’ai travaillé à l’Office de la langue française à Québec et collaboré avec des entreprises informatiques américaines.</p>

<p> J’ai également obtenu un double diplôme en commerce international, évoluant chez des leaders comme HP et Sun Microsystems.
 J’y ai piloté des projets techniques et commerciaux dans des régions variées (Afrique, Moyen-Orient, Europe), gérant des équipes multiculturelles et des partenariats complexes.</p>

<p>Inspirée par mes expériences anglo-saxonnes, je me consacre aujourd’hui à l’orientation et à la formation. </p>
    
    <p>J’aide élèves, étudiants et jeunes professionnels à clarifier leurs choix académiques et professionnels (choix de spécialités, Parcoursup, études post-bac, tests d’entrée), avec une approche pragmatique et interactive qui valorise leurs compétences et motivations.</p>
       </div>
     
       </div> ),
  },

   {
     id: 8,
     image1: "c8.png",
     classNameImage1:"w-full h-full rounded-t-xl object-cover object-top",
     image2: "e8.png",
     nom: "Myriam",
     prenom: "Diebold",
     number: "06 84 84 54 07",
     email: "myriam.diebold@prometheor.fr",
     localisation: "Auvergne Rhône Alpes",
     content: ( <div className=" space-y-10 ">
              <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>
      
       <div className="space-y-5">
<p>Je suis Myriam, conseillère d’orientation du réseau Prometheor. Depuis plus de 10 ans, j’enseigne dans l’enseignement supérieur et j’ai accompagné des centaines d’étudiants dans la construction de leur parcours.</p>


<p> En tant que membre de jury de sélection Parcoursup, je connais de l’intérieur les attentes des formations et les critères qui font la différence dans un dossier.</p><p>Après des études en linguistique informatique à la Sorbonne et un séjour d’échanges à l’Université Concordia à Montréal, j’ai travaillé à l’Office de la langue française à Québec et collaboré avec des entreprises informatiques américaines.</p>

<p>Aujourd’hui, je mets cette expertise au service des adolescents et de leurs familles pour les aider à aborder cette étape cruciale avec sérénité.</p>


<p>Je sais combien le choix d’orientation peut générer doutes, pressions ou tensions familiales. Mon rôle est d’offrir un espace d’écoute et de méthode pour transformer ces incertitudes en choix clairs et motivants.</p>    
   
<p>Mon objectif : redonner confiance aux ados, les rendre acteurs de leurs choix, et rassurer les parents en leur donnant une vision claire des étapes à venir.</p>       </div>
     
       </div> ),
   },

   {
     id: 9,
     image1: "c9.png",
         classNameImage1:"w-full h-full rounded-t-xl object-cover object-top",

     image2: "e9.png",
     nom: "Nadia ",
     prenom: "Royer",
     number: "06 26 48 33 76",
     email: "nadia.royer@gmail.com",
     localisation: "Auvergne-Rhône-Alpes",
     content: ( <div className=" space-y-10 ">
              <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>
      
       <div className="space-y-5">
<p>Après un Bac+5 en Gestion de l’information, j’ai travaillé 10 ans en tant que Chef de projet en informatique.</p>

<p>Je savais qu’analyser les besoins, comprendre, former et proposer des solutions pratiques étaient ce que j’aimais faire.
Professeure contractuelle à l’université en parallèle, j’étais souvent amenée à aider les jeunes de mon entourage à s’orienter ou à se réorienter.</p>
<p>Aujourd’hui, je mets cette expertise au service des adolescents et de leurs familles pour les aider à aborder cette étape cruciale avec sérénité.</p>

<p>L’envie de me sentir utile, de faire un métier « plus humain » et d’aider les adolescents de façon concrète est apparue comme une évidence. Depuis 2012, j’ai accompagné plus de 2000 familles</p>   
<p>Ce qui m’enthousiasme le plus c’est d’aider chacun à reprendre du pouvoir sur son orientation grâce à une meilleure connaissance de ses forces et à des clés concrètes pour passer à l'action.</p>
     </div>
     
       </div> ),
   },

   {
     id: 10,
     image1: "c10.jpg",
         classNameImage1:"w-full h-full rounded-t-xl object-cover object-center",

     image2: "e10.png",
     nom: "Laetitia ",
     prenom: "Masini ",
     number: "06 06 63 22 34",
     email: "laetitia.masini@prometheor.fr",
     localisation: "Auvergne-Rhône-Alpes",
     content: ( <div className=" space-y-10 ">
              <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>
      
       <div className="space-y-5">
<p>J'ai rejoint l'univers de l'orientation scolaire après 20 ans passés dans la communication et le design jusqu'à créer mon entreprise spécialisée dans le conseil.</p>


<p>Mère de 2 enfants, j’ai constaté que les jeunes doivent faire des choix structurants de plus en plus tôt, notamment dès la fin de la Seconde. </p>

<p>Il est donc essentiel de se renseigner et de rencontrer un conseiller d’orientation qui prendra le temps d'écouter, d'identifier les forces et les centres d'intérêts de chacun. </p>

<p>L’orientation est un chemin évolutif, il faut savoir construire pas à pas un projet solide, motivant et adapté au profil des jeunes.</p>

<p>Ce qui m'anime : accompagner les élèves dans leur orientation en développant la confiance en leur potentiel et en donnant du sens à leurs apprentissages.</p> 
  <p>Je suis à votre écoute pour un premier échange et définir vos besoins</p>
     </div>
     
       </div> ),
   },

   {
     id: 11,
     image1: "c11.png",
         classNameImage1:"w-full h-full rounded-t-xl  object-cover object-center",
     image2: "e11.png",
     nom: "Caroline ",
     prenom: "Geraads ",
     number: "06 50 99 49 56",
     email: "caroline.geraads@prometheor.fr",
     localisation: "Auvergne-Rhône-Alpes",
     content: ( <div className=" space-y-10 ">
              <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>
      
       <div className="space-y-5">
<h1 className="text-xl font-dmserif text-blue">Qui suis je ? </h1>
<p>Maman de 4 enfants, je suis organisée, à l’écoute et pragmatique !</p>

<p>D’un naturel optimiste et dynamique, pour moi tout problème a une solution ! J'aime poser les choses, puis prendre le recul nécessaire pour prendre une décision éclairée. Après une carrière d ingénieure, un passage au sein de l éducation nationale, je me suis tournée vers le métier de conseillère d’orientation scolaire qui me correspond totalement.</p>

<p>J'aime écouter les besoins, comprendre les personnalités et identifier les points d 'appuis pour
proposer des pistes et filières adaptées aux jeunes.</p>

<h2  className="text-xl font-dmserif text-blue"> Mes spécificités:</h2>
<div className=""> 
  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2"></i>
  <span className="text-lg font-dmserif text-blue">Accompagnement de personnes neuroatypiques</span>
  </div>


  <p>Je me suis formée et spécialisée dans les troubles du neurodéveloppement (TND) pour accompagner mes propres enfants porteurs de TSA (trouble du spectre de l’autisme) et de TDAH (trouble avec déficit de l’attention avec ou sans hyperactivité).</p>
     
     
    <p>Le challenge est pour moi d’aider en orientation ces jeunes à trouver des voies dans lesquelles leurs
particularités seront reconnues, acceptées et valorisées. L’objectif étant une insertion
professionnelle réussie
</p>

<div className=""> 
  <i className="fa-solid fa-graduation-cap text-jauneOr mr-2"></i>
  <span className="text-lg font-dmserif text-blue">Expérience professionelle</span>
  </div>

  <p>Mon expérience dans les secteurs de l’industrie, de l’enseignement et du secteur médico social, me permet d’apporter aux jeunes des exemples métiers concrets ainsi qu une connaîssance des savoirs être indispensables dans le monde professionnel.</p>
 <p>J’accompagne donc tous types de profils, avec ou sans projet professionnel, à apprendre à se connaître, préciser une filière d’accès métier, ou identifier un secteur adapté !</p>
      <p>Au plaisir d’échanger, n’hésitez pas à me contacter !</p>
      </div>





       </div> ),
   },

   {
     id: 12,
     image1: "c12.png",
     classNameImage1:"w-full h-full rounded-t-xl object-cover ",
     image2: "e12.png",
     nom: "Jessica  ",
     prenom: "Afonso ",
     number: "07 62 26 61 97",
     email: "jessica.afonso@prometheor.fr",
     localisation: "Occitanie",
    content: ( <div className=" space-y-10 ">
              <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>
      
       <div className="space-y-5">
<p>Basée dans le Val-de-Marne, j’ai exercé dans le domaine des Ressources Humaines et plus particulièrement du recrutement en entreprise pendant plus de 10 ans.</p>
<p>Diplômée d’un Master en Ressources Humaines, j’ai toujours su que je m’orienterais vers un métier d’accompagnement et de conseils.</p>


<p>Passionnée par l’humain et son développement, je me suis rapidement tournée dans mes expériences professionnelles vers un public jeune en gérant, en plus des recrutements, les partenariats avec les grandes écoles de commerce, ingénieur, Université, etc... J’ai ainsi pu guider et orienter les jeunes, depuis leur entrée en formation jusqu’à leur insertion dans le monde du travail.</p>

<p>Après avoir fait le choix de l’entrepreneuriat, c’est donc tout naturellement que j’ai choisi de prendre cette casquette de Conseillère d’Orientation afin de poursuivre cette mission qui me tient à cœur : Accompagner les jeunes dans ce difficile chemin qu’est l’orientation scolaire et professionnelle.</p>

<p>J’ai à cœur de créer un environnement de confiance et bienveillant pour que l’accompagnement soit aussi un plaisir et un moment de découverte et de révélation de soi.</p>

<p>Ma valeur ajoutée : Grâce à ma casquette recrutement, une bonne connaissance du marché du travail et des différents métiers existants !</p>

     </div>
     
       </div> ),
   
   },

   {
     id: 13,
     image1: "c13.jpeg",
         classNameImage1:"w-full h-full rounded-t-xl object-cover object-top",

     image2: "e13.png",
     nom: "Allios",
     prenom: "Laurie ",
     number: "07 51 06 42 84",
     email: "laurie.allios@prometheor.fr",
     localisation: "Auvergne-Rhône-Alpes",
      content: ( <div className=" space-y-10 ">
              <h2 className="font-dmserif text-3xl text-blue">Qui suis je ?</h2>
      
       <div className="space-y-5">
<p>Et si le vrai problème n’était pas que les jeunes ne savent pas quoi faire... mais qu’on ne les aide pas vraiment à se poser les bonnes questions ?</p>

<p>
  J’ai connu ce manque d’accompagnement à l’adolescence. Des choix scolaires faits trop vite, des chemins qui ne correspondaient pas vraiment à mes aspirations... Ces détours m’ont appris que les hésitations ne sont pas des faiblesses, mais ils m’ont surtout donné une conviction profonde : personne ne devrait avancer à l’aveugle dans une étape aussi importante de sa vie.
</p>


<p>
  C’est cette conviction qui m’a guidée dans mon parcours. J’ai travaillé dans l’insertion professionnelle, le recrutement et la formation, en accompagnant des profils très variés : des jeunes en quête de repères, des étudiants hésitants, mais aussi des managers et des dirigeants en repositionnement. J’ai également aidé de nombreux adultes à développer des
compétences clés comme la rédaction de CV, la prise de parole en public ou la confiance en soi. 
</p>

<p>Ces expériences m’ont permis de relier deux mondes : celui de la jeunesse, avec ses doutes et ses rêves, et celui du travail, avec ses réalités et ses exigences.</p>
<h2 className="text-3xl font-dmserif text-blue">Ma mission :</h2>
<div className="space-y-3">
  <p>Aujourd’hui, j’ai à cœur d’accompagner les adolescents et leurs familles à construire une orientation qui a du sens. 
Mon approche ne se limite pas à l’écoute et à la bienveillance :</p>
<ul className="space-y-3">
  <li className="space-x-2"> <IoCheckmark className="inline text-jauneOr shrink-0 text-xl "/> <span>J’aide les jeunes à mettre des mots clairs sur leurs talents, leurs valeurs et leurs envies</span></li>
  <li className="space-x-2"> <IoCheckmark className="inline text-jauneOr shrink-0 text-xl "/> <span>Je les guide à élargir le champ des possibles pour explorer des pistes parfois insoupçonnées</span></li>
  <li className="space-x-2 flex"> <IoCheckmark className="inline text-jauneOr shrink-0 text-xl mt-1 "/> <span>Je les accompagne dans l’établissement d’un plan d’action concret et réaliste, qui leur permet de passer de la réflexion à la mise en mouvement</span></li>
</ul>
<p>Parce que je suis convaincue d’une chose : on n’a pas besoin d’attendre 40 ans pour trouver une voie professionnelle épanouissante et alignée avec ses valeurs — même si la vie, bien sûr, est faite de changements... et heureusement. </p>
</div>
<p>Car lorsqu’on y est prêt, le changement devient une force : on trouve toujours une voie pour s’adapter et avancer.</p>
 </div>
     
       </div> ),
   },

   {
     id: 14,
     image1: "c14.png",
         classNameImage1:"w-full h-full rounded-t-xl object-cover object-top",

     image2: "e14.png",
     nom: "Brigitte    ",
     prenom: "Fressy ",
     number: "07 62 26 61 97",
     email: "brigitte.fressy@prometheor.fr",
     localisation: "Occitanie",
       content: ( <div className=" space-y-10 ">
              <h1 className="font-dmserif text-3xl text-blue">Presentation </h1>
      
       <div className="space-y-5">



<p>
  Basée dans le Val-de-Marne, j’ai exercé dans le domaine des Ressources Humaines et plus particulièrement du recrutement en entreprise pendant plus de 10 ans.
</p>
<p>Diplômée d’un Master en Ressources Humaines, j’ai toujours su que je m’orienterais vers un métier d’accompagnement et de conseils.</p>

<p>Passionnée par l’humain et son développement, je me suis rapidement tournée dans mes expériences professionnelles vers un public jeune en gérant, en plus des recrutements, les partenariats avec les grandes écoles de commerce, ingénieur, Université, etc... J’ai ainsi pu guider et orienter les jeunes, depuis leur entrée en formation jusqu’à leur insertion dans le monde du travail.</p>

<p>Après avoir fait le choix de l’entrepreneuriat, c’est donc tout naturellement que j’ai choisi de prendre cette casquette de Conseillère d’Orientation afin de poursuivre cette mission qui me tient à cœur : Accompagner les jeunes dans ce difficile chemin qu’est l’orientation scolaire et professionnelle.</p>
<p>J’ai à cœur de créer un environnement de confiance et bienveillant pour que l’accompagnement soit aussi un plaisir et un moment de découverte et de révélation de soi.</p>

<p>Ma valeur ajoutée : Grâce à ma casquette recrutement, une bonne connaissance du marché du travail et des différents métiers existants !</p>
</div>
     
       </div> ),
   },

   {
     id: 15,
     image1: "cs1.png",
         classNameImage1:"w-full h-full rounded-t-xl object-cover object-top",

     image2: "es1.png",
     nom: "Céline",
     prenom: "Sanchez  ",
     number: "06 72 02 41 52",
     email: "celine.sanchez@prometheor.com",
     localisation: "Occitanie",
     content: ( <div className=" space-y-10 ">
      
       <div className="space-y-5">
       <h1 className="font-dmserif text-2xl text-blue">Qui je suis ? : une professionnelle passionnée par l'accompagnement humain</h1>
       <p>Consultante indépendante, j’ai fait de l’accompagnement et du conseil mon métier, animé par une conviction profonde : chaque personne possède les ressources pour évoluer et s’épanouir. Que ce soit sur le plan scolaire, professionnel ou personnel, j’interviens auprès de mes bénéficiaires pour les guider avec bienveillance et rigueur dans leurs projets et leurs réflexions.</p>

     </div>

         <div className="space-y-5">

       <h2 className="font-dmserif text-2xl text-blue">Mes valeurs, fondement de mon approche</h2>
<p>L’écoute, l’empathie et l’honnêteté sont les piliers de mon travail. Ces valeurs me permettent de nouer une relation de confiance avec chaque personne que j’accompagne. Persévérante et réactive, je m’efforce d’adapter mon approche à chaque situation, dans le respect des besoins et des objectifs définis ensemble. Mon engagement est de fournir un
accompagnement sur mesure, propice à des prises de décisions éclairées et à un épanouissement durable.</p>
     </div>

              <div className="space-y-5">

       <h3 className="font-dmserif text-2xl text-blue">Un accompagnement personnalisé pour des résultats concrets</h3>
     <p>Chaque parcours est unique, et j’accorde une attention particulière à proposer un accompagnement adapté à chacun. Qu’il s’agisse d’un élève cherchant sa voie, d’un professionnel en quête de reconversion ou d’un particulier souhaitant retrouver confiance en soi, je mets tout en œuvre pour offrir un cadre rassurant et motivant. Mon rôle est de faire émerger des solutions qui répondent à vos attentes tout en respectant votre rythme.</p>   
    
     </div>

     <div className="space-y-5" >
      <h4 className="font-dmserif text-2xl text-blue">Une vision tournée vers l’avenir</h4>
      <p>Je suis persuadée que chaque étape de vie peut être une opportunité de changement positif. Mon objectif est de vous donner les clés pour avancer, en mettant en lumière vos atouts et en vous aidant à construire des plans d’action concrets. Ensemble, nous travaillerons à révéler le meilleur de vous-même et à bâtir un avenir qui vous ressemble.</p>
     </div>

     <div className="space-y-5" >
      <h5 className="font-dmserif text-2xl text-blue">« Mon objectif : vous aider à atteindre le vôtre »</h5>
      <p>Avec ce credo, je m’engage à vos côtés pour vous accompagner dans vos projets avec professionnalisme, humanité et dévouement. Je crois profondément en votre capacité à réussir et je suis là pour vous guider à chaque étape de votre cheminement.</p>
     </div>
     
       </div> ),
   },

   {
     id: 16,
     image1: "c16.jpg",
         classNameImage1:"w-full h-full rounded-t-xl object-cover object-top",

     image2: "e16.png",
     nom: "Laurence    ",
     prenom: "Rabier ",
     number: "06 84 23 77 19",
     email: "laurence.rabier@prometheor.fr",
     localisation: "Nouvelle Aquitaine",
       content: ( <div className=" space-y-10 ">
              <h1 className="font-dmserif text-3xl text-blue">Presentation </h1>
      
       <div className="space-y-5">



<p>Après 15 ans d’expérience professionnelle au sein de l’industrie pharmaceutique en tant que Chargée de Communication puis Chargée de Congrès pour le 5ème laboratoire mondial, j’ai souhaité intégrer une entreprise à taille humaine ce qui m’a amené à assurer la fonction de Responsable administrative au sein d’un Cabinet d’expertise comptable.</p>


<p>Ces différentes expériences ont été riches d’enseignements mais j’ai ensuite pris la décision de donner une nouvelle orientation à ma vie professionnelle avec un métier riche de sens et plus en phase avec mes affinités.</p>

<p>Mère de 3 enfants, j’ai toujours pensé qu’une bonne orientation scolaire est la clé de la réussite des jeunes. Même si l’on pense bien connaître ses enfants, je suis réellement persuadée qu’un accompagnement personnalisé par un professionnel de l’orientation est une réelle chance pour un jeune d’épanouissement dans sa future vie professionnelle. </p>

<p>Dans mon entourage, j’ai pu constater beaucoup d’erreurs d’orientation par manque d’informations et j’ai vu trop de jeunes qui ont subi plutôt que choisi leur orientation.</p>

<p>Forte de ce constat, j’ai souhaité orienter ma carrière vers un métier qui me permettait d’aider les jeunes et devenir Conseillère d’orientation répondait parfaitement à cet objectif.</p>

<p>
  Depuis 7 ans maintenant j’exerce ce métier qui me permet d’accompagner les jeunes dans leur parcours d’orientation afin de les aider à trouver le chemin qui correspond le mieux à leurs attentes et à leurs compétences.
Quel beau challenge que d’aider un jeune à identifier ses talents !
</p>
</div>
     
       </div> ),
  
    },

   {
     id: 17,
     image1: "c17.png",
         classNameImage1:"w-full h-full rounded-t-xl object-cover object-top",

     image2: "e17.png",
     nom: "Lolom   ",
     prenom: "Martine ",
     number: "06 30 40 01 07",
     email: "martine.lolom@prometheor.fr",
     localisation: "Bretagne",
      content: ( <div className=" space-y-10 ">
              <h1 className="font-dmserif text-3xl text-blue">Presentation </h1>
      
       <div className="space-y-5">



<p>Après l’obtention de ma Maîtrise de Gestion, j’ai travaillé 5 ans dans la fonction finances. A l’issue de cette période, j’ai réalisé un bilan de compétences qui a conforté mon souhait d’évoluer vers les RH. </p>

<p>Pour asseoir ce nouveau projet sur des bases solides, j’ai réalisé une formation de généraliste en RH. Puis j’ai poursuivi mon activité professionnelle, pendant 10 ans, dans des cabinets conseils de « reclassement », accompagnement de la transition professionnelle avec ou sans reconversion.</p>

<p>A l’issue d’une expatriation de 13 ans, je me suis tournée vers l’orientation scolaire, à la suite de mon expérience au sein de l’association de parents d’élèves du lycée de mes enfants. J’y ai réalisé que chaque enfant devait avoir un accompagnement personnalisé. J’exerce donc le métier de conseillère en orientation scolaire et professionnelle depuis 2019.</p>

<p>Cette nouvelle expérience me procure énormément de joie et de plaisir. En effet, J’aide les collégiens et lycéens a déterminé leur choix d’orientation, grâce à des outils sérieux (test inspiré du RIASEC) et à des entretiens approfondis avec eux et leur famille. L’orientation scolaire est une étape cruciale dès la classe de 3ᵉ. </p>

<p>C’est à ce moment que les élèves doivent choisir entre la filière générale et d’autres voies, un choix déterminant pour la suite de leur parcours. En classe de 2nde, la sélection des spécialités joue un rôle clé : elle permet de définir les orientations possibles et d’assurer une cohérence dans les choix de cursus post-bac. Ce travail de réflexion en amont facilite grandement la sélection des vœux sur Parcoursup.</p>

<p>Par ailleurs, j’accompagne les élèves dans leur préparation aux entretiens, qu’il s’agisse de concours ou du grand oral, afin qu’ils soient confiants et performants.
</p>
<p>
  Quant aux adultes, je les accompagne lors de virage à 360°. Nous construisons ensemble étapes par étapes leur futur projet, jusqu’à la création de leur activité.
</p>

<p>
  Au plaisir de vous rencontrer !
</p>
</div>
     
       </div> ),
  
   },

   {
     id: 18,
     image1: "c18.jpg",
     classNameImage1:"w-full h-full rounded-t-xl object-cover object-center",
     image2: "e18.png",
     nom: "Toulouse",
     prenom: "Karime",
     number: "06 14 32 57 68",
     email: "karine.toulouse@prometheor.fr",
     localisation: "Bourgogne-Franche-Comté",
     content: ( <div className=" space-y-10 ">
                          <h1 className="font-dmserif text-3xl text-blue">Qui suis je ? </h1>

       <div className="space-y-5">
          <div className="space-x-3 ">
            <i className="fa-solid fa-graduation-cap text-jauneOr  "></i>
            <span className="  text-xl font-dmserif">Conseillère en orientation, révélatrice de potentiels & souffleuse de sens</span>
          </div>
          <p>Vous avez un ado en plein flou artistique ? Une tête bien faite mais perdue entre médecine, BTS, année sabbatique et envie de "changer le monde" ? Respirez... vous êtes au bon endroit.</p>
         <p>Avec plus de 20 ans de parcours dans le recrutement, la formation, le développement personnel et la sophrologie, j’accompagne les jeunes (et leurs familles) à retrouver clarté, confiance et cap.</p>
         <p>Je ne me contente pas de parler filières ou débouchés : je fais émerger ce qui fait sens, je traduis les ressentis en plans d'action, et j’aide chacun à prendre sa juste place dans un monde en mouvement.</p>
     </div>

      <h2 className="font-dmserif text-3xl text-blue">Mon ADN</h2>

      <ul className="space-y-5">
        <li className="space-x-3"><IoCheckmark className="inline text-jauneOr shrink-0 text-xl "/> 
         <span>Écoute active et sans jugement</span>
        </li>
        <li className="space-x-3"><IoCheckmark className="inline text-jauneOr shrink-0 text-xl "/> 
         <span>Approche sur-mesure, ancrée dans le concret</span>
        </li>
        <li className="space-x-3"><IoCheckmark className="inline text-jauneOr shrink-0 text-xl "/> 
         <span>Paroles vraies, pas de bla-bla scolaire</span>
        </li>
        
        <li className="space-x-3"><IoCheckmark className="inline text-jauneOr shrink-0 text-xl "/> 
         <span>Un sens aigu des transitions de vie cl</span>
        </li>
      </ul>

      <h3 className="font-dmserif text-3xl text-blue">Ce qui m’anime ?</h3>
       <div className="space-y-5">
         <p>Voir un jeune (ou un parent !) sortir de l’entretien avec l’étincelle dans les yeux. Le genre d’étincelle qui dit : "OK, j’ai pigé où je vais et pourquoi."</p>
      <p>Et si on en parlait ? Le premier pas, c’est parfois juste un coup de fil.</p>
      
       </div>
    
       </div> ),
   },
   {
     id: 19,
     image1: "c15.png",
     classNameImage1:"w-full h-full  rounded-t-xl object-cover object-center ",
     image2: "e15.png",
     nom: "Finck-Rolly",
     prenom: "Estelle",
     number: "06 72 02 41 52",
     email: "estelle.finck-rolly@prometheor.fr",
     localisation: "Grand Est",
       content: ( <div className=" space-y-10 ">
              <h1 className="font-dmserif text-3xl text-blue">Presentation </h1>
      
       <div className="space-y-5">
<p>Après 20 ans dans l’enseignement en tant que professeure des écoles, j’ai décidé en 2020 de quitter l’Education nationale pour m’ouvrir à d’autres horizons.</p>

<p>A cette même période, je me suis réorientée dans la relecture et correction d’ouvrages mais très vite, je me suis rendu compte que le contact avec les enfants et les adolescents me manquait. </p>
<p>J’ai donc créé mon entreprise de formation et j’ai accompagné des élèves de la seconde jusqu’au BAC+2 en les préparant à plusieurs types d’examen.</p>

<p>Souvent en échangeant avec eux, mon expérience d’enseignante m’indiquait que la voie dans laquelle les jeunes s’engageaient n’était pas la bonne… Elle ne correspondait pas à leurs attentes, leur personnalité, leur manière d’être et de travailler, leurs particularités (HPI, dys…). </p>

<p>J’ai aussi retrouvé cette problématique en tant que maman lors de l’orientation de mon fils.</p>

<p>Pour pallier ce manque d’informations et afin de répondre aux besoins de ces jeunes et de leurs parents, j’ai décidé de me former au métier de conseillère d’orientation.</p>

<p>
  Ma valeur ajoutée : une connaissance approfondie du milieu scolaire et de l’Education nationale, la préparation à certains examens, la connaissance des méthodes d’apprentissage des élèves à profil particulier (dyslexiques, HPI…).
</p>


</div>
     
       </div> ),
   },

   {
     id: 20,
     image1: "c4.png",
         classNameImage1:"w-full h-full rounded-t-xl object-cover object-center",

     image2: "e4.png",
     nom: "  Sacko",
     prenom: "Aminata",
     number: "06 65 54 44 83",
     email: "aminata.sacko@prometheor.fr",
     localisation: "Val de Marne",
      content: ( <div className=" space-y-10 ">
              <h1 className="font-dmserif text-3xl text-blue">Presentation </h1>
      
       <div className="space-y-5">



<p>Basée dans le Val-de-Marne, j’ai exercé dans le domaine des Ressources Humaines et plus particulièrement du recrutement en entreprise pendant plus de 10 ans.</p>

<p>Diplômée d’un Master en Ressources Humaines, j’ai toujours su que je m’orienterais vers un métier d’accompagnement et de conseils.</p>

<p>
  Passionnée par l’humain et son développement, je me suis rapidement tournée dans mes expériences professionnelles vers un public jeune en gérant, en plus des recrutements, les partenariats avec les grandes écoles de commerce, ingénieur, Université, etc... J’ai ainsi pu guider et orienter les jeunes, depuis leur entrée en formation jusqu’à leur insertion dans le monde du travail.
</p>

<p>
  Après avoir fait le choix de l’entrepreneuriat, c’est donc tout naturellement que j’ai choisi de prendre cette casquette de Conseillère d’Orientation afin de poursuivre cette mission qui me tient à cœur : Accompagner les jeunes dans ce difficile chemin qu’est l’orientation scolaire et professionnelle.
</p>


<p>J’ai à cœur de créer un environnement de confiance et bienveillant pour que l’accompagnement soit aussi un plaisir et un moment de découverte et de révélation de soi.</p>

<p>Ma valeur ajoutée : Grâce à ma casquette recrutement, une bonne connaissance du marché du travail et des différents métiers existants !</p>


</div>
     
       </div> ),
  
   },
];

export default Users;