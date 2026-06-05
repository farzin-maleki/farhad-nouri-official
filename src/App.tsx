import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LifeStory from "./pages/LifeStory";
import Achievements from "./pages/Achievements";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/life-story" element={<LifeStory />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/book" element={<Book />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
