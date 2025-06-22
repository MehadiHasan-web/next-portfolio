
import About from "../../components/About";
import Resume from "../../components/Resume";
import Portfolio from './../../components/Portfolio';
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function Home() {

  return (
    <>
      <main>
        {/* - #SIDEBAR */}
        <Sidebar />
        {/* - #main-content */}
        <div className="main-content">
          {/* - #NAVBAR */}
          <Navbar />
          {/*- #ABOUT*/}
          <About />
          {/* - #RESUME */}
          <Resume />
          {/* - #PORTFOLIO */}
          <Portfolio />
          {/* - #BLOG */}
          <Blog />
          {/*- #CONTACT */}
          <Contact />
        </div>
      </main>
    </>
  );
}
