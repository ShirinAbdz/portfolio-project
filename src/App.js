import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Multipage from "./pages/Multipage";
import Bloglist from "./pages/Bloglist";
import Bloglist2 from "./pages/Bloglist2";
import BlogDetails from "./pages/BlogDetails";
import BlogDetails2 from "./pages/BlogDetails2";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/multipage" component={Multipage} exact />
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/bloglist" component={Bloglist2} exact />
        <Route path="/blogs/:id/:title" component={BlogDetails} />
        <Route path="/blog-details/:id/:title" component={BlogDetails2} />


      </Switch>
    </BrowserRouter>
  );
}

export default App;
