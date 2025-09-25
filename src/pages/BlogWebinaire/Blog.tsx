import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="flex flex-col  mb-10 bg-gray-50  ">
        <div className="w-full h-80 bg-gris">
          <img className="size-full object-cover object-top"  src="/article.png" alt="" />
        </div>
     
     <div className="p-2 space-y-3">
  <span className="font-dmserif my-2 "> À quel moment faire un bilan d’orientation scolaire ? </span>
        <Link to="/article" className="my-5 inline-block  cursor-pointer">
         <p className="hover:text-jauneOr transition-all"> L’orientation, ce n’est pas seulement choisir son projet post bac.</p>
        </Link>
     </div>
      
      
      </div>
    </>
  );
};

export default Blog;
