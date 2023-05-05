import { HashRouter, Routes, Route } from "react-router-dom";
//Pages
import { Contacto } from "./pages/Contacto";
import { Portafolio } from "./pages/Portafolio";
import { Skills } from "./pages/Skills";
import { Educacion } from "./pages/Educacion";
import { Home } from "./pages/Home";
//Components
import { NotFound } from "./components/NotFound";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

//styles
import "./scss/general.scss"
function App() {
  const resetScroll = () =>{
    window.scrollTo({top:0,behavior:"smooth"})
  } 
  
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home resetScroll={resetScroll}/>} />
          <Route path="/portafolio" element={<Portafolio resetScroll={resetScroll}/>} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

      </HashRouter>
    </>
  );
}

export default App;
