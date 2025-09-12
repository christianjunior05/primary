import Button from "../../Homepage/miniComponents/Button";

type Typage={
  image:string,
  text1?:string,
  text2?:string,
  icon:boolean,
  paragraphe1?:string,
  paragraphe2?:string,
  textbutton1:string,
  textbutton2?:string,
}
const Section6= ({ image,
  icon,
  paragraphe1,
  paragraphe2,
  textbutton1,
  textbutton2
}:Typage)=> {
    return ( 
    <div className="  ml-16   flex items-center justify-center gap-20  max-sm:space-x-0 my-20 ">

  <div className=" size-96  rounded-xl">
    <img src={`/${image}`} alt="image" className="size-full object-cover rounded-xl "/>
  </div>
  <div className="    space-y-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex flex-col ">
    <h2 className="text-blue font-lato font-dmserif  text-4xl max-md:text-center  "> Besoin de personnalisé  <span className="text-jauneOr">votre accompagnement ?</span>   </h2>
       
{paragraphe1 && <p className="   " > {paragraphe1} </p> }
{paragraphe2 && <p className="  " > {paragraphe2} </p> }
<div className="space-x-6 flex justify-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-x-0 max-sm:space-y-6 ">

    <Button text={textbutton1} icons={icon} />
 { textbutton2 && <Button text={textbutton2} icons={icon} />}
</div>

  </div>
</div> );
}

export default Section6 ;