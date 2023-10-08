import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Support from "./Components/Support";
import Labs from "./Components/Labs";
import { NotFound } from "./Components/NotFound";
import MainHeader from "./Components/MainHeader";

function App() {
  // ** react router is use for navigation(moving one page to another page) without refreshing the page
  // react router is one type of framework use to navigate between multiple pages without refreshing the page
  // it dynamically load components
  // it use SPA (Single Page Application) approach
  return (
    <div className="App">
      <nav>
        <ul>
          {/* we use Link or NavLink tag instead of a tag  */}
          {/* we use NavLink tag instead of Link tag because NavLink assign active class to currently clicked element */}
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
        </ul>
      </nav>
      

      {/* below is simple routing or simple nevigation */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes> */}

      {/* below is nesting routing or nesting nevigation */}
      <Routes>
        {/* it is nested routing  */}
        {/* it's required to write <Outlet/> in parent component or parent Route */}
        <Route path="/" element={<MainHeader/>}>
          {/* index attribute is used for default route */}
          <Route index element={<Home/>}></Route>
          <Route path="/support" element={<Support/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/labs" element={<Labs/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
