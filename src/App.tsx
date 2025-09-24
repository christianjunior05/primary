

import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollTop";
import MainLayout from "./Layouts/MainLayout";
import SimpleLayout from "./Layouts/SimpleLayout";

// Pages
import Homepage from "./components/Homepage/Homepage";
import PacksRepere from "./components/PacksRepere/PacksRepere";
import Exploration from "./components/exploration/Exploration";
import Trajectoire from "./components/Trajectoire/Trajectoire";
import NotreEngagement from "./pages/NotreEngagement";
import QuiSommeNous from "./pages/QuiSommeNous";
import Concours from "./pages/Concours";
import Parcours from "./pages/Parcours";
import Contact from "./pages/Contact";
import Conseillers from "./pages/Conseiller/Conseillers";
import Presentation from "./pages/Conseiller/Presentation";
import DevenirConseillers from "./pages/Conseiller/DevenirConseillers";
import BlogWebinaires from "./pages/BlogWebinaire/BlogWebinaires";
import Collaborateur from "./pages/Collaborateur";
import CGV from "./pages/CGV";
import Politique from "./pages/Politique";
import NotFound from "./NoteFound";
import Eblog from "./pages/BlogWebinaire/Eblog";
import RehypeDemo from "./pages/Rehypte";

import "../src/App.css";

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <ScrollToTop />

      <Routes>
       
        <Route element={<SimpleLayout />}>
          <Route path="/cgv" element={<CGV />} />
          <Route path="/politique" element={<Politique />} />
                 <Route path="*" element={<NotFound/>} />
        </Route>

  
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/repere" element={<PacksRepere />} />
          <Route path="/exploration" element={<Exploration />} />
          <Route path="/trajectoire" element={<Trajectoire />} />
          <Route path="/notreengagement" element={<NotreEngagement />} />
          <Route path="/concours" element={<Concours />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/QuiSommesNous" element={<QuiSommeNous />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/conseillers" element={<Conseillers />} />
          <Route path="/conseillers/:id" element={<Presentation />} />
          <Route path="/devenirconseiller" element={<DevenirConseillers />} />
          <Route path="/Blog" element={<BlogWebinaires />} />
          <Route path="/Eblog" element={<Eblog/>} />
          <Route path="/collaborateur" element={<Collaborateur />} />  
          <Route path="/rehype" element={<RehypeDemo />} />
        </Route>

       
      </Routes>
    </main>
  );
}

