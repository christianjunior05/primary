
import { FiPhone } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi2";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { useParams } from "react-router-dom";
import Users from "./Data";

const Presentation = () => {
  const { id } = useParams();
console.log(id)
  // Récupérer directement le conseiller depuis le tableau
  const Conseiller = Users.find(
    (user) => user.id === parseInt(id || "0", 10)
  );

  if (!Conseiller) return <p className="p-4">Conseiller introuvable </p>;

  return (
    <div>
      {/* Haut de page */}
      <div className="flex h-[400px] justify-center items-center bg-jauneOr/25 gap-20">
        <div className="size-52">
          <img
            src={`/${Conseiller.image}`}
            alt=""
            className="size-full object-cover object-top rounded-full"
          />
        </div>
        <div className="space-y-5">
          <h1 className="text-4xl font-dmserif text-blue">
            {Conseiller.prenom} {Conseiller.nom}
          </h1>
          <ul className="leading-8 space-y-1 text-xl">
            <li className="space-x-1">
              <FiPhone className="text-jauneOr inline  text-2xl" />
              <span>{Conseiller.number}</span>
            </li>
            <li className="space-x-1">
              <MdOutlineEmail className="text-jauneOr inline  text-2xl" />
              <span>{Conseiller.email}</span>
            </li>
            <li className="space-x-1">
              <MdOutlineLocationOn className="text-jauneOr inline  text-2xl" />
              <span>{Conseiller.localisation}</span>
            </li>
          </ul>

          <div className="space-x-5">
            <button className="space-x-2 max-lg:text-xs text-white text-sm bg-jauneOr py-3 px-5 font-montserrat font-semibold rounded-lg hover:bg-jauneOr/80">
              <span>Contacter {Conseiller.prenom}</span>
              <HiArrowRight className="font-semibold text-lg inline" />
            </button>

            <button className="space-x-2 max-lg:text-xs text-white text-sm bg-jauneOr py-3 px-5 font-montserrat font-semibold rounded-lg hover:bg-jauneOr/80">
              <span>Réserver un appel découverte</span>
              <HiArrowRight className="font-semibold text-lg inline" />
            </button>
          </div>
        </div>
      </div>

      {/* Présentation */}
      <div className="w-10/12 m-auto space-y-5 my-20">
        <h2 className="font-dmserif text-3xl text-blue">Présentation :</h2>
        <div className="font-medium space-y-5">
          {Conseiller.TextParagraphe.map((text, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentation;
