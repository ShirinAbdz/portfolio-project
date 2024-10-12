import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Multipage from "./pages/Multipage";
import Bloglist from "./pages/Bloglist";
import Bloglist2 from "./pages/Bloglist2";
import BlogDetails from "./pages/BlogDetails";
import BlogDetails2 from "./pages/BlogDetails2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/multipage" element={<Multipage />} />
        <Route path="/blogs" element={<Bloglist />} />
        <Route path="/bloglist" element={<Bloglist2 />} />
        <Route path="/blogs/:id/:title" element={<BlogDetails />} />
        <Route path="/blog-details/:id/:title" element={<BlogDetails2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
