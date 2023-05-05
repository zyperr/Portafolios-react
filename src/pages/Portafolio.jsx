
//component
import { Card } from "../components/Card";
//react icon 
import {AiOutlineArrowUp} from "react-icons/ai"
//styles
import "../scss/pages/Portafolio.scss"
function Portafolio({resetScroll}) {


  
  return (
    <section className="portafolio">
      <Card />
      <button className="go-up" onClick={resetScroll}><AiOutlineArrowUp/></button>
    </section >
  );
}

export { Portafolio };
