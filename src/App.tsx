
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer";
import PacksRepere from "./components/PacksRepere/PacksRepere";
import Exploration from "./components/exploration/Exploration";
import Trajectoire from "./components/Trajectoire/Trajectoire";
import NotreEngagement from "./pages/NotreEngagement";
import QuiSommeNous from "./pages/QuiSommeNous"
import Concours from "./pages/Concours";
import Parcours from "./pages/Parcours";
import Contact from "./pages/Contact";
import Conseillers from "./pages/Conseiller/Conseillers";
import { Routes, Route } from "react-router-dom";
import Presentation from "./pages/Conseiller/Presentation";
import Navbar from "./components/Navbar";
export default function App() {

 
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Routes>
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
        <Route path="/conseillers/:id" element={<Presentation  />} />
      </Routes>

      <Footer />
    </main>
  );
}
