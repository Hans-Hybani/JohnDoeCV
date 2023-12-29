import Accueil from "./pages/accueil";
import Services from "./pages/services";
import Realisation from "./pages/realisation";
import Legales from "./pages/mentionLegales";
import Contacter from "./pages/contacter";
import Blog from "./pages/blog";
import Footer from "./components/footer";
import Header from "./components/header";
import Profil from "./pages/profilGit"
import {Routes,Route } from "react-router-dom/dist";

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route index element={<Accueil/>}/>
          <Route path="/acceuil" element={<Accueil/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/realisation" element={<Realisation/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contacter" element={<Contacter/>}/>
          <Route path="/mentionLegales" element={<Legales/>}/>
          <Route path="/profilGit" element={<Profil/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
